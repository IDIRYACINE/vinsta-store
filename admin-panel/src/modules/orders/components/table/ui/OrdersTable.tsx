import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { OrderRow } from '../domain/TableEntity';
import { TableController } from '../logic/TableController';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


interface TableProps {
  headersData: string[],
  rowsData: OrderRow[]
}

export default function OrdersTable(props: TableProps) {

  const controller = new TableController()

  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {props.headersData.map((header) => (
              <StyledTableCell key={header}>{header}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rowsData.map((row) => (
            <StyledTableRow onClick={e => controller.handleRowClick(row)} key={row.orderHeader.id.value}>
              {
                row.toRowData().map((cellData, index) => (
                  <StyledTableCell key={`${index}`}>{cellData.value}</StyledTableCell>
                ))
              }

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}