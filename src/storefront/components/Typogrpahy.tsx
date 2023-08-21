import { Container, SxProps, Theme, Typography } from "@mui/material"

interface PriceDisplayProps {
    currency: string,
    price: number | string,
    inverted : boolean 
}

export function PriceDisplay(props: PriceDisplayProps) {

    const { price, currency,inverted } = props

    const bgColor = inverted ? "burlywood" : "white"
    const textColor = inverted ? "white" : "burlywood"

    return (
        <Container sx={{ backgroundColor: bgColor, display: "flex", justifyContent: "center" }}>
            <Typography color={textColor} variant="h4">
                {price} {currency}
            </Typography>
        </Container>
    )
}

interface DisplayTypographyProps {
    text: string,
    color?: string,
    sx ?: SxProps<Theme>,
    className? : string
}

export function DisplayTypography(props: DisplayTypographyProps) {
    const { text, color,sx ,className} = props


    return <Typography textAlign="center" className={className} sx={sx} variant="h2" color={color}>{text}</Typography>
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