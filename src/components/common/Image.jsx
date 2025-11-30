import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function Image({ src, alt, legend }) {
  return (
    <Card sx={{ my: 2 }}>
      <CardMedia component="img" image={src} alt={alt || legend || ""} />
      {legend && (
        <CardContent>
          <Typography variant="caption" color="text.secondary">
            {legend}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
}
