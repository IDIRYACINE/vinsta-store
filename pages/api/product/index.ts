import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next'
import { ProductServicePort } from '@vinstacore/infrastructure/ports/services/ProductServicePort';
import { FirebaseAdapter } from '@vinstacore/infrastructure/services/firebase';
 
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const productService: ProductServicePort = FirebaseAdapter.productService();
  

  switch (req.method) {
    case "GET": return GET(req, res,productService)
    case "POST": return POST(req, res,productService)
    case "PUT": return PUT(req, res,productService)
    case "DELETE": return DELETE(req, res,productService)
  }
}
 
export default handler

async function GET(req: NextApiRequest, res: NextApiResponse,service:ProductServicePort) {


  const categoryId = req.query.categoryId as string;

  const response = await service.load({
    categoryId: categoryId
  })


  return res.status(200).json({ data: response });
}


async function POST(req: NextApiRequest, res: NextApiResponse,service:ProductServicePort) {

  const options = req.body;
  
  const response = await service.create(options);

  return res.status(200).json({ data: response });
}


async function PUT(req: NextApiRequest, res: NextApiResponse,service:ProductServicePort) {
  const options = req.body


  const response = await service.update(options);

  return res.status(200).json({ data: response });
}

async function DELETE(req: NextApiRequest, res: NextApiResponse,service:ProductServicePort) {

  const categoryId = req.query.categoryId as string;
  const productId = req.query.productId as string;

  const response = await service.delete({
    categoryId, productId
  });

  return res.status(200).json({ data: response });
}