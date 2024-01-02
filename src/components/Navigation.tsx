import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Container } from "@mui/material";
import { A } from "./A";
import { LoginButton } from "./LoginButton";
import { NavTabs } from "./NavTabs";

export function Navigation() {
  return (
    <Box sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}>
      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <NavTabs />

        <A href={import.meta.env.VITE_GITHUB_URL}>
          <GitHubIcon />
        </A>

        <LoginButton />
      </Container>
    </Box>
  );
}
