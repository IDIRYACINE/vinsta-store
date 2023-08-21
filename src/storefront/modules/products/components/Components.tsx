import { Repository } from "@vinstacore/index"
import { Typography, ToggleButton, ToggleButtonGroup, Box, CardMedia, Card, CardActionArea, Button } from "@mui/material";
import { useState } from "react";
import {ShoppingCart} from '@mui/icons-material';

interface SizeViewProps {
    size: Repository.Size
    isActive: boolean
}

function SizeView(props: SizeViewProps) {
    const { size } = props

    return (<ToggleButton value={size}>
        <Typography>{size.size} </Typography>
    </ToggleButton>)
}

interface SizesViewProps {
    sizes: Repository.Size[]
}

export function SizesView(props: SizesViewProps) {

    const [selectedSize, selectSize] = useState<Repository.Size>(props.sizes[0])

    function handleSizeSelection(
        event: React.MouseEvent<HTMLElement>,
        newSize: Repository.Size,
    ) {
        selectSize(newSize);
    };

    return (
        <ToggleButtonGroup onChange={handleSizeSelection} value={selectedSize} exclusive>
            {
                props.sizes.map(
                    size => {
                        return <SizeView size={size} isActive={false} key={size.id} />
                    }
                )
            }
        </ToggleButtonGroup>
    )

}



interface ActionsRowProps {
    addToCart: () => void,
    goBack: () => void,
}
export function ActionsRow(props: ActionsRowProps) {
    const { addToCart } = props


    return (
            <Button className="h-20 w-60" onClick={addToCart}>
                <Box className="flex flex-row justify-evenly items-center w-full">
                    <Typography variant="body1">Add to cart</Typography>
                    <ShoppingCart />
                </Box>
            </Button>
            
    )
}