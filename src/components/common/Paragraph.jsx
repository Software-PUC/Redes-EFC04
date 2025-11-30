import { Typography } from "@mui/material";

export default function Paragraph({ children }) {
  return (
    <Typography
      variant="body1"
      sx={{ mb: 2, fontWeight: 300, fontSize: "1.05rem" }}
    >
      {children}
    </Typography>
  );
}
