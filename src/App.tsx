import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./views/Home";
import { Profile } from "./views/Profile";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Container>
        <Routes>
          <Route element={<Home />} path="/"></Route>

          <Route element={<Profile />} path="/profile"></Route>

          {/* Error route */}
          <Route element={<h1 style={{ color: "red" }}>404 - page not found</h1>} path="*" />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
