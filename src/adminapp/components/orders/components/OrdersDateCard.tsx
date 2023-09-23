import { Card, Typography ,CardActionArea} from "@mui/material";
import { formatOrderIdDisplay } from "@vinstacore/domains/orders/domain/OrderEntity";


interface OrderDateCardProps{
    orderDateId:string
    onClick:(id:string)=>void
}
export function OrderDateCard({orderDateId,onClick}:OrderDateCardProps){
    return (
        <Card className="p-2 ">
            <CardActionArea className="flex justify-center items-center" onClick={() => onClick(orderDateId)}>
                <Typography variant="h5" component="h2">{formatOrderIdDisplay(orderDateId)}</Typography>
            </CardActionArea>
        </Card>
    )
}