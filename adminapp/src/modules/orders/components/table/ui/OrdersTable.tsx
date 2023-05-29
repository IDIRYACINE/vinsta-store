'use client'

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { OrderRowEntity } from "../domain/TableEntity";
import { TableController } from "../logic/TableController";
import { OrderHeader, OrderRow } from "./OrderRow";
import { Box } from "@mui/material";
import { OrderStatusTab } from "./OrderStatus";
import { OrderStatus } from "@adminapp/modules/orders/domain/OrderStatus";

interface TableProps {
  headersData: string[];
  rowsData: OrderRowEntity[];
}

export default function OrdersTable(props: TableProps) {
  const controller = new TableController();

  return (
    <Box>
      <OrderStatusTab statusList={OrderStatus.orderStatusList} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <OrderHeader headers={props.headersData} />
          </TableHead>
          <TableBody>
            {props.rowsData.map((row) => (
              <OrderRow
                handleClick={controller.handleRowClick}
                key={row.orderHeader.id.value}
                item={row}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
