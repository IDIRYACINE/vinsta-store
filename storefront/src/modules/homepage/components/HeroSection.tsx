import { Box, Container,Paper } from "@mui/material";
import { DisplayTypography } from "@storefront/components";
import clsx from "clsx";



export function HeroSection() {

    const boxStyle = {
        "backgroundImage": "url('images/heroBackground.jpg')",
        "backgroundSize": "cover",
    }

    const boxClassName = clsx([
        "flex-1 mt-2 w-full h-full absolute z-0 opacity-10 ",
        "md:relative md:opacity-100 md:z-1 md:min-w-screen-half"
    ])


    const containerClassName = clsx([
        "flex flex-row justify-center items-center  ",
        "h-screen p-0 m-0 relative",
        
    ])


    const paperClassName = clsx([
        "flex h-full justify-center items-center p-0 md:p-2 ",
    ])

    return (
        <Box className={containerClassName} >
            <Box className={boxClassName} sx={boxStyle} />

            <Paper className={paperClassName} color="primary">
                <DisplayTypography  color="white" text="Welcome to XXinstaverse" />
            </Paper>
        </Box>
    )
}