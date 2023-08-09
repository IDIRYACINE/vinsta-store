import { Box, Container } from "@mui/material";
import { DisplayTypography } from "@storefront/components";



export function HeroSection() {

    const boxStyle = {
        "backgroundImage": "url('images/heroBackground.jpg')",
        "backgroundSize": "cover",
        "height": "100vh",
        "width": "100vw",
        flex: 2,
        "marginTop": "2rem",
        marginRight: "2rem",
    }

    const containerStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        maxWidth: "100vw",
        margin: "0",
        padding: "0",
    }

    return (
        <Container maxWidth={false} color="filled" sx={containerStyle}>
            <Box sx={boxStyle} />

            <DisplayTypography sx={{ flex: 1 }} color="white" text="Welcome to XXinstaverse" />


        </Container>
    )
}