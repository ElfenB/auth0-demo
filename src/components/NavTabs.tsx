import { useAuth0 } from "@auth0/auth0-react";
import { Tab, Tabs } from "@mui/material";
import type { SyntheticEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function NavTabs() {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const { isAuthenticated } = useAuth0();

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    navigate(newValue);
  };

  return (
    <Tabs onChange={handleChange} value={pathname}>
      <Tab label="Home" value="/" />

      {isAuthenticated && <Tab label="Profile" value="/profile" />}
    </Tabs>
  );
}
