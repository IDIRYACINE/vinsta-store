import { Box, Paper } from "@mui/material";
import { DisplayTypography } from "src/storefront/components/commons";
import clsx from "clsx";
import Logo from "@common/Logo";



export function HeroSection() {

    const boxStyle = {
        "backgroundImage": "url('assets/heroBackground.jpg')",
        "backgroundSize": "cover",
    }
    const boxStyle_2= {
        "backgroundImage": "url('assets/heroBackground1.jpg')",
        "backgroundSize": "cover",
    }

    const boxClassName = clsx([
        "flex-1 mt-2 w-full h-full absolute z-0 opacity-10 ",
        "md:relative md:opacity-100 md:z-1 md:min-w-screen-half"
    ])


    const containerClassName = clsx([
        "flex flex-row justify-center items-center  ",
        "h-screen w-full p-0 m-0 relative",
        
    ])


    const paperClassName = clsx([
        "flex flex-col h-full w-full justify-center items-center p-0 md:p-2 ",
    ])

    return (
        <Box className={containerClassName} >
            <Box className={boxClassName} sx={boxStyle} />
            <Box className={boxClassName} sx={boxStyle_2} />
        </Box>
    )
}