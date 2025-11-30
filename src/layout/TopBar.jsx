import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export default function TopBar({ drawerWidth }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <MenuBookIcon sx={{ mr: 2 }} />
        <Typography variant="h6" noWrap component="div">
          Wiki sobre o projeto EFC04
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
