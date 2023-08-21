import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next'
import { OrderServicePort } from '@vinstacore/infrastructure/ports/services/OrdersServicePort';
import { FirebaseAdapter } from '@vinstacore/infrastructure/services/firebase';


const handler = (req: NextApiRequest, res: NextApiResponse) => {

  switch (req.method) {
    case "GET": GET(req, res)
      break;
    case "POST": POST(req, res)
      break;
    case "PUT": PUT(req, res)
      break;
    case "DELETE": DELETE(req, res)
      break;
  }
}


const orderService: OrderServicePort = FirebaseAdapter.ordersService();



async function GET(req: NextApiRequest, res: NextApiResponse) {


  return orderService.load({
    page: -1,
    limit: -1
  }).then((response) => {
    res.status(200).json({ data: response.data });

  }).catch((error) => {
    res.status(500).json({ data: error });

  })



}


async function POST(req: NextApiRequest, res: NextApiResponse) {
  const options = req.body


  const response = await orderService.create(options);

  return res.status(200).json({ data: response });
}


async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const options = req.body


  const response = await orderService.update(options);

  return res.status(200).json({ data: response });
}

async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const orderId = req.query.orderId as string

  const response = await orderService.delete({
    orderId: orderId
  });

  return res.status(200).json({ data: response });
}

export default handler

