import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Box, Button, Container, Tab, Tabs } from "@mui/material";
import type { SyntheticEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Navigation() {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    navigate(newValue);
  };

  return (
    <Box sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}>
      <Container
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Tabs onChange={handleChange} value={pathname}>
          <Tab label="Home" value="/" />
          {isAuthenticated && <Tab label="Profile" value="/profile" />}
        </Tabs>

        {!isAuthenticated && <Button onClick={() => loginWithRedirect()}>Login</Button>}

        {isAuthenticated && (
          <Box sx={{ alignItems: "center", display: "flex", pr: 1 }}>
            <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Button>
            <Avatar alt="user" src={user?.picture} sx={{ height: "1.5rem", width: "1.5rem" }} />
          </Box>
        )}
      </Container>
    </Box>
  );
}
