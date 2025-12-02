import { Typography } from "@mui/material";

export default function SubTopic({ children }) {
  return (
    <Typography
      component="h1"
      gutterBottom
      sx={{ fontWeight: 500, mt: 6, fontSize: "1.1rem" }}
    >
      {children}
    </Typography>
  );
}
