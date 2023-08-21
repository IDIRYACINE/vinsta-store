import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next'
import { ProductServicePort } from '@vinstacore/infrastructure/ports/services/ProductServicePort';
import { FirebaseAdapter } from '@vinstacore/infrastructure/services/firebase';
 
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch(req.method){
    case "GET": GET(req,res)
    break;
    case "POST": POST(req,res)
    break;
    case "PUT": PUT(req,res)
    break;
    case "DELETE": DELETE(req,res)
    break;
  }
}
 
export default handler

const productService: ProductServicePort = FirebaseAdapter.productService();

async function GET(req: NextApiRequest, res: NextApiResponse) {


  const categoryId = req.query.categoryId as string;

  const response = await productService.load({
    categoryId: categoryId
  })


  return NextResponse.json({ data: response });
}


async function POST(req: NextApiRequest, res: NextApiResponse) {

  const options = req.body;

  const response = await productService.create(options);

  return NextResponse.json({ data: response });
}


async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const options = req.body


  const response = await productService.update(options);

  return NextResponse.json({ data: response });
}

async function DELETE(req: NextApiRequest, res: NextApiResponse) {

  const categoryId = req.query.categoryId as string;
  const productId = req.query.productId as string;

  const response = await productService.delete({
    categoryId, productId
  });

  return NextResponse.json({ data: response });
}