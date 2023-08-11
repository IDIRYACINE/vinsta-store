import { Repository } from "@vinstacore"
import { Typography, ToggleButton, ToggleButtonGroup, Box, CardMedia, Card, CardActionArea } from "@mui/material";
import { useState } from "react";

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


