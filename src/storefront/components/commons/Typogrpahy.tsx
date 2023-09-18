import { Container, SxProps, Theme, Typography,Accordion,AccordionSummary,AccordionDetails } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/Add';

interface PriceDisplayProps {
    currency: string,
    price: number | string,
    inverted: boolean
}

export function PriceDisplay(props: PriceDisplayProps) {

    const { price, currency, inverted } = props

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
    sx?: SxProps<Theme>,
    className?: string
}

export function DisplayTypography(props: DisplayTypographyProps) {
    const { text, color, sx, className } = props


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

interface SandwichTypographyProps{
    text?: string,
    color?: string,
    title: string
}
export function SandwichTypography(props: SandwichTypographyProps) {
    const { text, color,title } = props

    return (
        <Accordion className="bg-primary w-full" square={true}>
            <AccordionSummary 
                expandIcon={<ExpandMoreIcon color="secondary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography color={color}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails >
                <Typography color={color}>{text}</Typography>
            </AccordionDetails>
        </Accordion>

    )
}