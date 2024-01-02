import SportsBarIcon from "@mui/icons-material/SportsBar";
import { Box, Typography } from "@mui/material";
import { A } from "./A";

export function Footer() {
  return (
    <Box sx={{ alignItems: "center", display: "flex", height: "5vh", justifyContent: "center" }}>
      <Typography color="textSecondary" variant="body2">
        ©{new Date().getFullYear()} - <A href="https://benjamin-elfen.de">Benjamin Elfen</A>
      </Typography>

      <A href="https://www.buymeacoffee.com/elfenben">
        <Box sx={{ alignItems: "center", display: "flex" }}>
          <SportsBarIcon fontSize="small" sx={{ ml: "0.5rem" }} />
        </Box>
      </A>
    </Box>
  );
}
