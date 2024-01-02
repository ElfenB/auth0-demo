import { useAuth0 } from "@auth0/auth0-react";
import { Container, createTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { Navigation } from "./components/Navigation";
import { Home } from "./views/Home";
import { Profile } from "./views/Profile";

export function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode],
  );

  const isEnvDefined =
    import.meta.env.VITE_AUTH0_CLIENT_ID && import.meta.env.VITE_AUTH0_DOMAIN && import.meta.env.VITE_GITHUB_URL;

  if (!isEnvDefined) {
    return (
      <h1 style={{ color: "red", fontFamily: "sans-serif", textAlign: "center" }}>
        Error: Please check environment variables.
      </h1>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Navigation />

        <Container>
          <Routes>
            <Route element={<Home />} path="/"></Route>

            {isAuthenticated && <Route element={<Profile />} path="/profile"></Route>}

            {/* Wait for auth to load before showing possible error route */}
            {isLoading && <Route element={<LoadingSpinner />} path="*"></Route>}

            {/* Error route */}
            <Route element={<h1 style={{ color: "red" }}>404 - page not found</h1>} path="*" />
          </Routes>
        </Container>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
