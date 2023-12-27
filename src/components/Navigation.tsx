import { Button, Container, Tab, Tabs } from "@mui/material";
import { useCallback } from "react";
import type { SyntheticEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function Navigation() {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    navigate(newValue);
  };

  const handleLogin = useCallback(() => {
    console.log("implement me");
  }, []);

  return (
    <Container
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Tabs onChange={handleChange} value={pathname}>
        <Tab label="Home" value="/" />
        <Tab label="About" value="/about" />
        <Tab label="Contact" value="/contact" />
      </Tabs>

      <Button onClick={handleLogin}>Login</Button>
    </Container>
  );
}
