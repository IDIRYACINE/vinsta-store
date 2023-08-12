import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { CategoryHeader, CategoryRow } from "./CategoryRow";
import { Box } from "@mui/material";
import { Repository } from "@vinstastore/vinstacore";

interface TableProps {
  headersData: string[];
  rowsData: Repository.Category[];
}

function CategoryTable(props: TableProps) {

  const { headersData, rowsData } = props

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <CategoryHeader headers={headersData} />
          </TableHead>
          <TableBody>
            {rowsData.map((row) => (
              <CategoryRow
                key={row.id}
                item={row}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}


export { CategoryTable };