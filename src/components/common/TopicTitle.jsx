import { Typography } from "@mui/material";

export default function TopicTitle({ children }) {
  return (
    <Typography
      variant="h5"
      component="h1"
      gutterBottom
      sx={{ fontWeight: 500, mt: 6 }}
    >
      {children}
    </Typography>
  );
}
