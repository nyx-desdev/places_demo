import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "#005f73" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "left", fontWeight: "bold" }}
          >
            Autocomplete map search
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
