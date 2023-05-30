
interface OrderStatus {
    name: string,
    color: string
}
const orderStatusList = [
    { name: 'confirmed', color: 'green-500' },
    { name: 'shipped', color: 'blue-500' },
    { name: 'onHold', color: 'orange-500' },
    { name: 'delivered', color: 'green-700' },
    { name: 'cancelled', color: 'red-500' }]

function orderStatusfromString(value: string): OrderStatus {

    const status = orderStatusList.find((status) => status.name === value)
    if (status === undefined) {
        throw new Error('Invalid order status')
    }

    return status
}


export { type OrderStatus , orderStatusfromString,orderStatusList  }