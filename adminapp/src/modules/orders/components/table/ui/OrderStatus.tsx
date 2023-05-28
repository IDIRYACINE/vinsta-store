import { OrderStatus } from "@adminapp/modules/orders/domain/OrderStatus"
import { Typography, Card, Tab, Tabs } from "@mui/material"
import {useState,SyntheticEvent} from "react"

interface OrderStatusLabelProps {
    status: OrderStatus
}

function OrderStatusLabel(props: OrderStatusLabelProps) {
    const classNameTypography = `font-bold text-${props.status.color}`

    return (

        <Typography className={classNameTypography}>
            {props.status.name}
        </Typography>

    )
}

interface OrderStatusTabProps {
    statusList: OrderStatus[]
}
function OrderStatusTab(props: OrderStatusTabProps) {
    const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

    return (
        <Card className="mb-1">
            <Tabs value={value} onChange={handleChange} aria-label="order status tab">
                {
                    props.statusList.map((status) => {
                        return <Tab key ={`tab-${status.name}`} label={status.name}  />
                    })
                }
            </Tabs>
        </Card>
    )
}



export { OrderStatusLabel ,OrderStatusTab}