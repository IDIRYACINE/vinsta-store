import {
    TableCell,
    TableRow,
    Typography,
    Box, Button
} from "@mui/material";
import { Repository } from "@vinstastore/vinstacore";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from "next/image";
import {useRouter} from "next/navigation"


import {   openDeleteCategoryDialog, setEditedCategory, } from "@adminapp/store";
import { useAppDispatch, useAppSelector } from "@adminapp/store/clientHooks";


interface CategoryActionsCellProps {
    onDelete: () => void;
    onEdit: () => void;
}
function CategoryActionsCell(props: CategoryActionsCellProps) {


    return (
        <TableCell>
            <Box className="flex flex-row justify-start ">
                <Button className="mr-1" onClick={props.onDelete}><DeleteIcon /></Button>
                <Button onClick={props.onEdit}><EditIcon /></Button>
            </Box>
        </TableCell>
    );
}
interface CategoryTableCellProps {
    value: string;
}

function CategoryTableCell(props: CategoryTableCellProps) {
    return (
        <TableCell>
            <Typography> {props.value}</Typography>
        </TableCell>
    );
}

interface CategoryImageCellProps {
    imageUrl: string;
    name: string
}
function CategoryTableImageCell(props: CategoryImageCellProps) {
    return (
        <TableCell>
            <Box className="flex flex-row ">
                <Image width="50" height="50" src={props.imageUrl} alt="" />
                <Typography className="ml-1">{props.name}</Typography>
            </Box>
        </TableCell>
    );
}

interface CategoryRowProps {
    item: Repository.Category;
    key: any;
}

function CategoryRow(props: CategoryRowProps) {
    const { item } = props

    const dispatch = useAppDispatch()

    const router = useRouter()

    function handleDelete() {
        dispatch(openDeleteCategoryDialog(item))
    }

    function handleEdit() {
        dispatch(setEditedCategory(item))
        router.replace(`/admin/categories/edit/${item.id}`)

    }

    return (
        <TableRow >
            <CategoryTableImageCell imageUrl={item.imageUrl} name={item.name} />
            <CategoryTableCell value={item.id} />
            <CategoryTableCell value={item.description ?? ""} />
            <CategoryActionsCell onDelete={handleDelete} onEdit={handleEdit} />
        </TableRow>
    );
}

interface CategoryHeaderProps {
    headers: string[];
}

function CategoryHeader(props: CategoryHeaderProps) {
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

export { CategoryRow, CategoryHeader };
