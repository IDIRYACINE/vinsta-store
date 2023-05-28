import { Box, Button, Divider } from "@mui/material"
import clsx from "clsx"

function ActionButton(){
    const classNormal = clsx(['flex flex-col align-end h-16 w-full px-1'])
    
    return (
        <Box className={classNormal}>
            <Button>Back</Button>
            <Divider  />
        </Box>
    )
}

export default ActionButton