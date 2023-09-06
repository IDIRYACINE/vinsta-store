
interface OrderStatus {
    name: string,
    color: string
}
const orderStatusList = [
    { name: 'onHold', color: 'orange-500' },
    { name: 'confirmed', color: 'green-500' },
    { name: 'cancelled', color: 'red-500' }
]

function orderStatusfromString(value: string): OrderStatus {

    const status = orderStatusList.find((status) => status.name === value)
    if (status === undefined) {
        throw new Error('Invalid order status')
    }

    return status
}


export { type OrderStatus , orderStatusfromString,orderStatusList  }