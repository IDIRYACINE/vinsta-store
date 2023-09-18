import { Repository } from "@vinstacore/index"
import { List, ListItemButton, ListItemText, Typography,Card ,Avatar,ListItemAvatar} from "@mui/material"


interface ItemsListProps {
    items: Repository.OrderItem[]
}

interface ItemTextProps {
    item: Repository.OrderItem
}

function ItemsList(props: ItemsListProps) {

    const ItemPrimaryText = (props: ItemTextProps) => {
        const {item} = props 
        return (<div className="flex flex-row justify-evenly"> 
            <Typography variant="body1">{item.name}</Typography>
            <Typography variant="body1">x{item.quantity}</Typography>
            <Typography variant="body1">{item.price} Da</Typography>
        </div>)
    }

    const ItemSecondaryText = (props: ItemTextProps) => {
        const {item} = props 

        return (<div className="flex flex-row justify-evenly"> 
            <Typography variant="body1">size : {item.size.size}</Typography>
            <Typography variant="body1">color : {item.color.color}</Typography>
        </div>)
    }
    

    const image = (item: Repository.OrderItem) => {
        if(!item.images){
            return ""
        }

        return item.images[0]
    }

    return (
        <Card className="w-96">
            <List>
                {
                    props.items.map((item, index) => (
                        <ListItemButton key={index}>
                            <ListItemAvatar > 
                                <Avatar src={image(item)} />
                            </ListItemAvatar>
                            <ListItemText primary={<ItemPrimaryText item={item}/>} secondary={<ItemSecondaryText item={item}/>}/>
                        </ListItemButton>
                    ))
                }
            </List>
        </Card>
    )
}

export default ItemsList