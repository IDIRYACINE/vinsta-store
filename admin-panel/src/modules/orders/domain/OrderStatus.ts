
class OrderStatus {
    static orderStatusList = [
        new OrderStatus('confirmed', 'green-500'),
        new OrderStatus('shipped', 'blue-500'),
        new OrderStatus('onHold', 'orange-500'),
        new OrderStatus('delivered', 'green-700'),
        new OrderStatus('cancelled', 'red-500'),]

    constructor(public readonly name: string, public readonly color: string) {

    }

    static fromString(value: string): OrderStatus {

        const status = this.orderStatusList.find((status) => status.name === value)
        if (status === undefined) {
            throw new Error('Invalid order status')
        }
        console.log(status)
        console.log(status.name)

        return status
    }
}



export { OrderStatus }