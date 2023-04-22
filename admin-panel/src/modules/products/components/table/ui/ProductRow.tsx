import {
    CardMedia,
    Card,
    TableCell,
    TableRow,
    Typography,
    Box,
} from "@mui/material";
import { ProductEntity } from "@vinstacore";

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

interface ProductTableImageCellProps {
    imageUrl: string;
    name:string
}
function ProductTableImageCell(props: ProductTableImageCellProps) {
    return (
        <TableCell>
            <Card sx={{ maxWidth: 100 }}>
                <Box className="flex flex-row ">
                <CardMedia sx={{ height: 140 ,"margin-rgiht" : "0.5rem"}} image={props.imageUrl} />
                <Typography>{props.name}</Typography>
                </Box>
            </Card>
        </TableCell>
    );
}

interface ProductRowProps {
    item: ProductEntity;
    key: any;
    handleClick: (item: ProductEntity) => void;
}

function ProductRow(props: ProductRowProps) {
    function handleClick() {
        props.handleClick(props.item);
    }

    const imageUrl = props.item.imageUrls[0].value

    return (
        <TableRow onClick={handleClick}>
            <ProductTableImageCell imageUrl={imageUrl} name={props.item.name.value} />
            <ProductTableCell value={props.item.quantity.value.toString()} />
            <ProductTableCell value={props.item.price.value.toString()} />
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
