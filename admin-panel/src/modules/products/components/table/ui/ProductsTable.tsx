import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { TableController } from "../logic/TableController";
import { ProductHeader, ProductRow } from "./ProductRow";
import { Box } from "@mui/material";
import { ProductEntity } from "@vinstacore";

interface TableProps {
  headersData: string[];
  rowsData: ProductEntity[];
}

export default function ProductsTable(props: TableProps) {
  const controller = new TableController();

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <ProductHeader headers={props.headersData} />
          </TableHead>
          <TableBody>
            {props.rowsData.map((row) => (
              <ProductRow
                handleClick={controller.handleRowClick}
                key={row.id.value}
                item={row}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
