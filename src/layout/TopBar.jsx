import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MenuIcon from "@mui/icons-material/Menu";

export default function TopBar({ drawerWidth, onMenuClick }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        {/* Desaparecer no desk pois é só para mobile */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <MenuBookIcon sx={{ mr: 2, display: { xs: "none", sm: "inline-flex" } }} />
        <Typography variant="h6" noWrap component="div">
          Minha Wiki
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
