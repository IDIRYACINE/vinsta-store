/* eslint-disable @next/next/no-img-element */
import {

    TableCell,
    TableRow,
    Typography,
    Box, Button
} from "@mui/material";

import { Repository } from "@vinstacore/index"

import { Edit, Delete } from '@mui/icons-material';


import { openDeleteProductDialog, setEditedProduct, } from "@vinstacore/store/admin/slices/productsSlice";
import { useAppDispatch } from "@vinstacore/store/clientHooks";


import { useRouter } from "next/navigation";



interface ProductActionsCellProps {
    onDelete: () => void;
    onEdit: () => void;
}
function ProductActionsCell(props: ProductActionsCellProps) {


    return (
        <TableCell>
            <Box className="flex flex-row justify-start ">
                <Button className="mr-1" onClick={props.onDelete}><Delete /></Button>
                <Button onClick={props.onEdit}><Edit /></Button>
            </Box>
        </TableCell>
    );
}
interface ProductTableCellProps {
    value: string;
    className? : string
}

function ProductTableCell(props: ProductTableCellProps) {
    return (
        <TableCell>
            <Typography className={props.className}> {props.value}</Typography>
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
            <Box className="flex flex-row items-center">
                <img width="100" height="100" src={props.imageUrl} alt="" />
            </Box>
        </TableCell>
    );
}

interface ProductRowProps {
    item: Repository.Product;
    key: any;
}

function ProductRow(props: ProductRowProps) {
    const { item } = props
    const dispatch = useAppDispatch()
    const router = useRouter()


    function handleDelete() {
        dispatch(openDeleteProductDialog(item))
    }

    function handleEdit() {
        dispatch(setEditedProduct(item))
        router.replace(`/admin/products/edit/${item.id}`)

    }

    return (
        <TableRow >
            <ProductTableImageCell imageUrl={item.imageUrls[0].url} name={item.name} />
            <ProductTableCell value={item.name} />
            <ProductTableCell className="truncate" value={item.description ?? ""} />
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
