import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next'
import { FirebaseAdapter } from '@vinstacore/infrastructure/services/firebase';
import { CategoryServicePort } from '@vinstacore/infrastructure/ports/services/CategoryServicePort';
 
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



const categoryService: CategoryServicePort = FirebaseAdapter.categoryService();

async function GET(req: NextApiRequest, res: NextApiResponse) {

  let rawData = (await categoryService.load({
    page: -1,
    limit: -1
  })).data


  const response = NextResponse.json({ data: rawData });
  response.headers.set('Cache-Control', 'no-store');


  return res;
}

async function POST(req: NextApiRequest, res: NextApiResponse) {
  const options = req.body


  const response = await categoryService.create(options);

  return NextResponse.json({ data: response });
}


async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const options = req.body

  console.log(options);

  const response = await categoryService.update(options);

  return NextResponse.json({ data: response });
}

async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const categoryId = req.query.categoryId as string

  const response = await categoryService.delete({
    id: categoryId
  });

  return NextResponse.json({ data: response });
}

export default handler