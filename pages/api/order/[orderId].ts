import { NextApiRequest, NextApiResponse } from 'next'
import { OrderServicePort } from '@vinstacore/infrastructure/ports/services/OrdersServicePort';
import { FirebaseAdapter } from '@vinstacore/infrastructure/services/firebase';


const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return GET(req,res)
  
}
const orderService: OrderServicePort = FirebaseAdapter.ordersService();

 async function GET(req: NextApiRequest, res: NextApiResponse) {

  const orderId = req.query.orderId as string;
  const dateId = req.query.dateId as string;

  const response = (await orderService.trackOrderstatus({
    orderId,dateId
  })).data

  return res.status(200).json({ data: response });
}

export default handler