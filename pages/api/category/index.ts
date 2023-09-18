import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next'
import { FirebaseAdapter } from '@vinstacore/infrastructure/services/firebase';
import { CategoryServicePort } from '@vinstacore/infrastructure/ports/services/CategoryServicePort';

const handler = (req: NextApiRequest, res: NextApiResponse) => {

  switch (req.method) {
    case "GET": return GET(req, res)
      
    case "POST": return POST(req, res)
    case "PUT": return PUT(req, res)
    case "DELETE": return DELETE(req, res)
  }
}



const categoryService: CategoryServicePort = FirebaseAdapter.categoryService();

async function GET(req: NextApiRequest, res: NextApiResponse) {

  let rawData = (await categoryService.load({
    page: -1,
    limit: -1
  })).data




  return res.status(200).json({ data: rawData });


}

async function POST(req: NextApiRequest, res: NextApiResponse) {
  const options = req.body
  
  const response = await categoryService.create(options);

  return res.status(200).json({ data: response });
}


async function PUT(req: NextApiRequest, res: NextApiResponse) {
  const options = req.body


  const response = await categoryService.update(options);

  return res.status(200).json({ data: response });
}

async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const categoryId = req.query.categoryId as string

  const response = await categoryService.delete({
    id: categoryId
  });

  return res.status(200).json({ data: response });
}

export default handler