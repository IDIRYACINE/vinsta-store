'use client'

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { OrderHeader, OrderRow } from "./OrderRow";
import { Box } from "@mui/material";
import { OrderStatusTab } from "./OrderStatus";
import { orderStatusList } from "@adminapp/modules/orders/domain/OrderStatus";
import { Repository } from "@vinstacore/index";
import { useRouter } from "next/navigation";

interface TableProps {
  headersData: string[];
  rowsData: Repository.OrderHeader[];
}

export default function OrdersTable(props: TableProps) {

  const router = useRouter()

  function handleRowClick(orderHeader: Repository.OrderHeader) {
    router.replace(
      `/admin/orders/${orderHeader.id}`
    )
  }

  return (
    <Box>
      <OrderStatusTab statusList={orderStatusList} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="orders table">
          <TableHead>
            <OrderHeader headers={props.headersData} />
          </TableHead>
          <TableBody>
            {props.rowsData.map((row) => (
              <OrderRow
                handleClick={handleRowClick}
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
