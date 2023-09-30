import { Button, Link,Toolbar, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';

export default function AppFooter() {
    return (
            <Toolbar className="flex flex-row justify-evenly items-center w-full bg-primary">
                <Typography variant="h6" color="secondary">Vinstaverse@2023</Typography>

                <Link href="https://www.instagram.com/vintaverse/?hl=fr" className="flex flex-row justify-center items-center">
                        <InstagramIcon className="mr-1" color="secondary"/>
                        <Typography className="text-bold" variant="h6" color="secondary">Vinstaverse</Typography>

                </Link>


            </Toolbar>

    )
}