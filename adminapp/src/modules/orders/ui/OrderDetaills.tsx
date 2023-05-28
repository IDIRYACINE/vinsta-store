import { Box } from "@mui/material"
import clsx from "clsx"
import { OrderEntity } from "@vinstacore"
import ShippingCard from "../components/shipping/ShippingCard"

interface OrderDetaillsProps {
    order : OrderEntity
}

function OrderDetaills(props:OrderDetaillsProps){
    
    const className = clsx([
        "p-4 flex flex-col justify-center items-center"
    ])

    return (
        <Box className={className}>
            <ShippingCard address={props.order.shipping}/>
        </Box>
    )
}


export  {OrderDetaills}