import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { navigationTree } from "../navigation";

const drawerWidth = 260;

export default function AppLayout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <TopBar drawerWidth={drawerWidth} onMenuClick={handleDrawerToggle} />

      <Sidebar
        drawerWidth={drawerWidth}
        navigationTree={navigationTree}
        mobileOpen={mobileOpen}
        onDrawerToggle={handleDrawerToggle}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          mt: 8,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
