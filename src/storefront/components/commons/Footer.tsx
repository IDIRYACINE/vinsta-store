import { Button, Link,Toolbar, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';

export default function AppFooter() {
    return (
            <Toolbar className="flex flex-row justify-evenly items-center w-full ">

                <Typography variant="h6" color="primary">Vinstaverse@2023</Typography>

                <Link href="https://www.instagram.com/vintaverse/?hl=fr" className="no-underline	 flex flex-row justify-center items-center">
                        <InstagramIcon className="mr-1" color="primary"/>
                        <Typography className="text-bold" variant="h6" color="primary">Vinstaverse</Typography>

                </Link>


            </Toolbar>

    )
}