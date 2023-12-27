import { useAuth0 } from "@auth0/auth0-react";
import { Box, CircularProgress } from "@mui/material";

export function Profile() {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress sx={{ mt: "30%" }} />
      </Box>
    );
  }

  if (!isAuthenticated || !user) {
    return <h1>Not authenticated</h1>;
  }

  return (
    <Box>
      <h1>Welcome, {user.given_name}</h1>

      <img alt="user" src={user.picture} />
      <p>{JSON.stringify(user, null, 2)}</p>
    </Box>
  );
}
