import {
   
    TableCell,
    TableRow,
    Typography,
    Box, Button
} from "@mui/material";
import { ProductEntity } from "@vinstacore";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from "next/image";
import { adminContext } from "@adminapp/components/context/AppContext";
import { useContext } from "react";

interface ProductActionsCellProps {
    onDelete: () => void;
    onEdit: () => void;
}
function ProductActionsCell(props: ProductActionsCellProps) {


    return (
        <TableCell>
            <Box className="flex flex-row justify-start ">
                <Button className="mr-1" onClick={props.onDelete}><DeleteIcon /></Button>
                <Button onClick={props.onEdit}><EditIcon /></Button>
            </Box>
        </TableCell>
    );
}
interface ProductTableCellProps {
    value: string;
}

function ProductTableCell(props: ProductTableCellProps) {
    return (
        <TableCell>
            <Typography> {props.value}</Typography>
        </TableCell>
    );
}

interface ProductImageCellProps {
    imageUrl: string;
    name: string
}
function ProductTableImageCell(props: ProductImageCellProps) {
    return (
        <TableCell>
            <Box className="flex flex-row ">
                <Image width="50" height="50" src={props.imageUrl} alt="" />
                <Typography className="ml-1">{props.name}</Typography>
            </Box>
        </TableCell>
    );
}

interface ProductRowProps {
    item: ProductEntity;
    key: any;
}

function ProductRow(props: ProductRowProps) {
    const { productsState} = adminContext
    const {item} = props

    function handleDelete(){
        productsState.displayDeleteModal(item)
    }

    function handleEdit() {
        productsState.editProduct(item)
    }

    return (
        <TableRow >
            <ProductTableImageCell imageUrl={item.imageUrls[0].value} name={item.name.value} />
            <ProductTableCell value={item.id.value.toString()} />
            <ProductTableCell value={item.description.value.toString()} />
            <ProductActionsCell onDelete={handleDelete} onEdit={handleEdit} />
        </TableRow>
    );
}

interface ProductHeaderProps {
    headers: string[];
}

function ProductHeader(props: ProductHeaderProps) {
    const className = "font-bold";

    return (
        <TableRow>
            {props.headers.map((header) => (
                <TableCell className={className} key={header}>
                    {header}
                </TableCell>
            ))}
        </TableRow>
    );
}

export { ProductRow, ProductHeader };
