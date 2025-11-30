import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { navigationTree } from "../navigation";

const drawerWidth = 260;

export default function AppLayout({ children }) {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <TopBar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} navigationTree={navigationTree} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
