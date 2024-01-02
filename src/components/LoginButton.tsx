import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Box, Button } from "@mui/material";

export function LoginButton() {
  const { isAuthenticated, isLoading, loginWithRedirect, logout, user } = useAuth0();

  // User is not logged in or still loading
  if (!isAuthenticated || isLoading) {
    return <Button onClick={() => loginWithRedirect()}>Login</Button>;
  }

  // User is logged in
  return (
    <Box sx={{ alignItems: "center", display: "flex", pr: 1 }}>
      <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Button>

      <Avatar alt="user" src={user?.picture} sx={{ height: "1.5rem", width: "1.5rem" }} />
    </Box>
  );
}
