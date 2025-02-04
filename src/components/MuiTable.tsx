import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '500px'}}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: "Edgard",
    last_name: "Brayford",
    email: "ebrayford0@earthlink.net",
    gender: "Male",
    ip_address: "40.110.245.143",
  },
  {
    id: 2,
    first_name: "Neile",
    last_name: "Adao",
    email: "nadao1@livejournal.com",
    gender: "Female",
    ip_address: "114.133.18.242",
  },
  {
    id: 3,
    first_name: "Bron",
    last_name: "Imison",
    email: "bimison2@t-online.de",
    gender: "Male",
    ip_address: "101.59.67.176",
  },
  {
    id: 4,
    first_name: "Bruis",
    last_name: "Levison",
    email: "blevison3@google.es",
    gender: "Male",
    ip_address: "184.171.139.200",
  },
  {
    id: 5,
    first_name: "Dore",
    last_name: "O'Farrell",
    email: "dofarrell4@uiuc.edu",
    gender: "Female",
    ip_address: "72.182.124.97",
  },
  {
    id: 6,
    first_name: "Neille",
    last_name: "Whitney",
    email: "nwhitney5@amazon.co.uk",
    gender: "Female",
    ip_address: "31.82.180.200",
  },
  {
    id: 7,
    first_name: "Kylila",
    last_name: "Gascoyen",
    email: "kgascoyen6@earthlink.net",
    gender: "Female",
    ip_address: "4.231.85.223",
  },
  {
    id: 8,
    first_name: "Rem",
    last_name: "Castaneda",
    email: "rcastaneda7@google.com.hk",
    gender: "Male",
    ip_address: "79.253.249.108",
  },
  {
    id: 9,
    first_name: "Arel",
    last_name: "Grubey",
    email: "agrubey8@ehow.com",
    gender: "Non-binary",
    ip_address: "110.128.77.169",
  },
  {
    id: 10,
    first_name: "Bebe",
    last_name: "Bowshire",
    email: "bbowshire9@devhub.com",
    gender: "Female",
    ip_address: "238.66.13.132",
  },
];
