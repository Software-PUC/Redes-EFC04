import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function Image({ src, alt, legend, width = 500 }) {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Card sx={{ my: 2, width: width }}>
        <CardMedia
          component="img"
          image={src}
          alt={alt || legend || ""}
          sx={{
            width: "100%",
            objectFit: "contain",
          }}
        />
        {legend && (
          <CardContent>
            <Typography variant="caption" color="text.secondary">
              {legend}
            </Typography>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
