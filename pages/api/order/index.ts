import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next'
import { OrderServicePort } from '@vinstacore/infrastructure/ports/services/OrdersServicePort';
import { FirebaseAdapter } from '@vinstacore/infrastructure/services/firebase';


const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": return GET(req, res)
      
    case "POST": return POST(req, res)
    case "PUT": return PUT(req, res)
    case "DELETE": return DELETE(req, res)
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


  const response = await orderService.updateOrderStatus(options);

  return res.status(200).json({ data: response });
}

async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const dateId = req.query.dateId as string

  const response = await orderService.deleteSegment({
    dateId: dateId
  });

  return res.status(200).json({ data: response });
}

export default handler

