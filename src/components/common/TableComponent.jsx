import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Typography,
} from "@mui/material";

export default function TableComponent({ data }) {
  if (!data || data.length === 0) {
    return (
      <Typography variant="body2" sx={{ color: "text.secondary", my: 2 }}>
        Nenhum dado disponível.
      </Typography>
    );
  }

  // Pega automaticamente as chaves do primeiro objeto para ser o cabeçalho
  const columns = Object.keys(data[0]);

  return (
    <TableContainer component={Paper} sx={{ my: 3 }}>
      <Table>
        <TableHead sx={{ backgroundColor: "#e8ecf3ff" }}>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col}
                sx={{ fontWeight: "bold", textTransform: "capitalize" }}
              >
                {col.replace(/_/g, " ")}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map((col) => (
                <TableCell key={col}>{row[col]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
