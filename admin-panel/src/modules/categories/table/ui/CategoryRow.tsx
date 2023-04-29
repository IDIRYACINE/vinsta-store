import {
    CardMedia,
    Card,
    TableCell,
    TableRow,
    Typography,
    Box, Button
} from "@mui/material";
import { CategoryEntity } from "@vinstacore";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from "next/image";

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
    item: CategoryEntity;
    key: any;
    handleDelete: (item: CategoryEntity) => void;
    handleEdit: (item: CategoryEntity) => void;
}

function CategoryRow(props: CategoryRowProps) {

    function handleDelete() {
        props.handleDelete(props.item)
    }

    function handleEdit() {
        props.handleEdit(props.item)
    }

    return (
        <TableRow >
            <CategoryTableImageCell imageUrl={props.item.imageUrl.value} name={props.item.name.value} />
            <CategoryTableCell value={props.item.id.value.toString()} />
            <CategoryTableCell value={props.item.description.value.toString()} />
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
