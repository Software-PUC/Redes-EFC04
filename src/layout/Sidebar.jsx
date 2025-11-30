import React from "react";
import {
  Drawer,
  Toolbar,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  ListSubheader,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

function NavItem({ item, level = 0, currentPath }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    if (item.children) {
      setOpen((prev) => !prev);
    }
  };

  const isActive = item.path && currentPath === item.path;

  if (item.children && !item.path) {
    return (
      <>
        <ListItemButton onClick={handleClick} sx={{ pl: 2 + level * 2 }}>
          <ListItemText primary={item.label} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {item.children.map((child) => (
              <NavItem
                key={child.id}
                item={child}
                level={level + 1}
                currentPath={currentPath}
              />
            ))}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <>
      <ListItemButton
        component={Link}
        to={item.path}
        selected={isActive}
        sx={{ pl: 2 + level * 2 }}
        onClick={handleClick}
      >
        <ListItemText primary={item.label} />
      </ListItemButton>
      {item.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {item.children.map((child) => (
              <NavItem
                key={child.id}
                item={child}
                level={level + 1}
                currentPath={currentPath}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
}

export default function Sidebar({
  drawerWidth,
  navigationTree,
  mobileOpen,
  onDrawerToggle,
}) {
  const location = useLocation();

  const drawerContent = (
    <>
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List
          component="nav"
          subheader={
            <ListSubheader component="div">Páginas da Wiki</ListSubheader>
          }
        >
          {navigationTree.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              currentPath={location.pathname}
            />
          ))}
        </List>
      </Box>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
      aria-label="Páginas da Wiki"
    >
      {/* Drawer para mobile*/}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Drawer para desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
