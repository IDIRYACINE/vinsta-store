import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next'
import { ProductServicePort } from '@vinstacore/infrastructure/ports/services/ProductServicePort';
import { FirebaseAdapter } from '@vinstacore/infrastructure/services/firebase';
 
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": return GET(req, res)
      
    case "POST": return POST(req, res)
    case "PUT": return PUT(req, res)
    case "DELETE": return DELETE(req, res)
  }
}
 
export default handler

const productService: ProductServicePort = FirebaseAdapter.productService();

async function GET(req: NextApiRequest, res: NextApiResponse) {


  const categoryId = req.query.categoryId as string;

  const response = await productService.load({
    categoryId: categoryId
  })


  return res.status(200).json({ data: response });
}


async function POST(req: NextApiRequest, res: NextApiResponse) {

  const options = req.body;

  const response = await productService.create(options);

  return res.status(200).json({ data: response });
}


async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const options = req.body


  const response = await productService.update(options);

  return res.status(200).json({ data: response });
}

async function DELETE(req: NextApiRequest, res: NextApiResponse) {

  const categoryId = req.query.categoryId as string;
  const productId = req.query.productId as string;

  const response = await productService.delete({
    categoryId, productId
  });

  return res.status(200).json({ data: response });
}