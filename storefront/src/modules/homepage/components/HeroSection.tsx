import { Box } from "@mui/material";



export function HeroSection(){

    const boxStyle = {
        "backgroundImage" : "url('images/heroBackground.jpg')",
        "backgroundSize" : "cover",
        "height" : "100vh",
        "width" : "100vw",
        "marginTop" : "2rem"
    }

    return (
        <Box sx={boxStyle}>

        </Box>
    )
}