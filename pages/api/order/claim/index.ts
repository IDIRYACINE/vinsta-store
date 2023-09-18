import { NextApiRequest, NextApiResponse } from 'next'
import { OrderServicePort } from '@vinstacore/infrastructure/ports/services/OrdersServicePort';
import { FirebaseAdapter } from '@vinstacore/infrastructure/services/firebase';


const handler = (req: NextApiRequest, res: NextApiResponse) => {
    return PUT(req, res)
}

async function PUT(req: NextApiRequest, res: NextApiResponse) {
    const orderService: OrderServicePort = FirebaseAdapter.ordersService();

    const options = req.body

    const response = await orderService.claimProducts(options);

    return res.status(200).json({ data: response });
}

export default handler