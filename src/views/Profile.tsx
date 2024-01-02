import { useAuth0 } from "@auth0/auth0-react";
import type { Theme } from "@mui/material";
import { Box, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { LoadingSpinner } from "../components/LoadingSpinner";

export function Profile() {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated || !user) {
    return <h1>Not authenticated</h1>;
  }

  return (
    <Box>
      <h1>Welcome, {user.given_name}</h1>

      <img alt="user" src={user.picture} />

      <Table>
        <TableBody>
          {Object.keys(user).map((key, i) => (
            <TableRow
              key={key}
              sx={(theme: Theme) => ({
                background: theme.palette.mode === "dark" ? blueGrey[900] : blueGrey[100],
                filter: i % 2 ? "brightness(90%)" : undefined,
              })}
            >
              <TableCell key={key}>
                <strong>{key}</strong>
              </TableCell>

              <TableCell>{JSON.stringify(user[key as keyof typeof user]).replace(/"/g, "")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
