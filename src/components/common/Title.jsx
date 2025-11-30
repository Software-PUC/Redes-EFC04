import React from "react";
import { Typography } from "@mui/material";

export default function Title({ children }) {
  return (
    <Typography variant="h4" component="h1" gutterBottom>
      {children}
    </Typography>
  );
}
