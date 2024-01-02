import { Box, Divider } from "@mui/material";
import { Libraries } from "../components/Libraries";
import { Readme } from "../components/Readme";

export function Home() {
  return (
    <Box>
      <Readme />

      <Divider sx={{ my: 3 }} variant="inset" />

      <Libraries />
    </Box>
  );
}
