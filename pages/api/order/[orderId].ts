import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next'
import { OrderServicePort } from '@vinstacore/infrastructure/ports/services/OrdersServicePort';
import { FirebaseAdapter } from '@vinstacore/infrastructure/services/firebase';


const handler = (req: NextApiRequest, res: NextApiResponse) => {
   GET(req,res)
  
}
const orderService: OrderServicePort = FirebaseAdapter.ordersService();

 async function GET(req: NextApiRequest, res: NextApiResponse) {

  const orderId = req.query.orderId as string;

  const response = (await orderService.find({
    orderId
  })).data



  return res.status(200).json({ data: response });
}

export default handler