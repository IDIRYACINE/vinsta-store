import { Button } from "@mui/material"

type SidebarButtonProps = {
    text: string;
    iconClassName : string;
}

export default function SidebarButton(props: SidebarButtonProps) {

    return (
        <Button variant="contained" >
            {props.text}
        </Button>
    )
}