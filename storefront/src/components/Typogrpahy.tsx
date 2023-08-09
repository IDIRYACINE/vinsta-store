import { Container, SxProps, Theme, Typography } from "@mui/material"

interface PriceDisplayProps {
    currency: string,
    price: number | string
}

export function PriceDisplay(props: PriceDisplayProps) {

    const { price, currency } = props

    return (
        <Container sx={{ backgroundColor: "white", display: "flex", justifyContent: "center" }}>
            <Typography color="burlywood" variant="h4">
                {price} {currency}
            </Typography>
        </Container>
    )
}

interface DisplayTypographyProps {
    text: string,
    color?: string,
    sx ?: SxProps<Theme>
}

export function DisplayTypography(props: DisplayTypographyProps) {
    const { text, color,sx } = props


    return <Typography sx={sx} variant="h2" color={color}>{text}</Typography>
}


interface TypographProps {
    text: string,
    color?: string
}
export function BodyTypograph(props: TypographProps) {
    const { text } = props

    return <Typography variant="body1">{text}</Typography>

}


export function TitleTypograph(props: TypographProps) {
    const { text } = props

    return <Typography variant="caption">{text}</Typography>

}


export function SubTitleTypograph(props: TypographProps) {
    const { text } = props

    return <Typography variant="subtitle1">{text}</Typography>

}


export function SandwichTypography(props: DisplayTypographyProps) {
    const { text, color } = props


    return (<Container>
        <Typography color={color}>{text}</Typography>
    </Container>)
}