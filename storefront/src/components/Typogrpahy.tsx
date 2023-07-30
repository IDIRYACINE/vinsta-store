import { Container, Typography } from "@mui/material"

interface PriceDisplayProps {
    currency: string,
    price: number | string
}

export function PriceDisplay(props: PriceDisplayProps) {

    const { price, currency } = props

    return (
        <Container sx={{ backgroundColor: "white", display: "flex", justifyContent: "center" }}>
            <Typography color ="burlywood" variant="h4">
                {price} {currency}
            </Typography>
        </Container>
    )
}

interface DisplayTypographyProps {
    text: string,
    color?: string
}

export function DisplayTypography(props: DisplayTypographyProps) {
    const { text, color } = props


    return <Typography color={color}>{text}</Typography>
}


export function SandwichTypography(props: DisplayTypographyProps) {
    const { text, color } = props


    return (<Container>
        <Typography color={color}>{text}</Typography>
    </Container>)
}