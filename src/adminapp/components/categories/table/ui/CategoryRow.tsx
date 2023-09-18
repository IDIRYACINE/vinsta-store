/* eslint-disable @next/next/no-img-element */
import {
    TableCell,
    TableRow,
    Typography,
    Box, Button
} from "@mui/material";
import { Repository } from "@vinstacore/index";

import {Edit,Delete} from '@mui/icons-material';
import {useRouter} from "next/navigation"


import {   openDeleteCategoryDialog, setEditedCategory, } from "@vinstacore/store/admin/slices/categoriesSlice";
import { useAppDispatch } from "@vinstacore/store/clientHooks";


interface CategoryActionsCellProps {
    onDelete: () => void;
    onEdit: () => void;
}
function CategoryActionsCell(props: CategoryActionsCellProps) {


    return (
        <TableCell>
            <Box className="flex flex-row justify-start ">
                <Button className="mr-1" onClick={props.onDelete}><Delete /></Button>
                <Button onClick={props.onEdit}><Edit /></Button>
            </Box>
        </TableCell>
    );
}
interface CategoryTableCellProps {
    value: string;
    className? : string
}

function CategoryTableCell(props: CategoryTableCellProps) {
    return (
        <TableCell>
            <Typography className={props.className}> {props.value}</Typography>
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
            <Box className="flex flex-row items-center">
                <img width="100" height="100" src={props.imageUrl} alt="" />
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
            <CategoryTableCell value={item.name} />
            <CategoryTableCell className="truncate" value={item.description ?? ""} />
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
