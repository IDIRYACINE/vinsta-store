import { Box } from "@mui/material";
import clsx from "clsx";
import Image from 'next/image'


export function HeroSection() {


    const containerClassName = clsx([
        "flex flex-col md:flex-row justify-center items-center  ",
        "h-full md:h-screen w-full p-0 m-0 relative",

    ])

    const heroClassName = clsx([
        "w-full h-full md:w-1/2"
    ])


    return (
        <Box className={containerClassName} >

            <div className={heroClassName}>
                <Image fill={true} className="relative"  src="/assets/heroBackground.jpg" alt="hero" />
            </div>

            <div className={heroClassName}>
                <Image fill={true} className="relative" src="/assets/heroBackground1.jpg" alt="hero2" />
            </div>


        </Box>
    )
}