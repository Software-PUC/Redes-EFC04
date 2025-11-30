import React from "react";
import { Typography } from "@mui/material";

export default function Paragraph({ children }) {
  return (
    <Typography variant="body1" sx={{ mb: 2 }}>
      {children}
    </Typography>
  );
}
