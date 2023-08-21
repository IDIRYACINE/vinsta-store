import { NextResponse } from 'next/server';
import { CategoryServicePort, FirebaseAdapter } from '@vinstacore/index';


const categoryService: CategoryServicePort = FirebaseAdapter.categoryService();

export async function GET(request: Request) {

  let rawData = (await categoryService.load({
    page: -1,
    limit: -1
  })).data


  const res = NextResponse.json({ data: rawData });
  res.headers.set('Cache-Control', 'no-store');


  return res;
}

export async function POST(request: Request) {
  const options = await request.json();


  const response = await categoryService.create(options);

  return NextResponse.json({ data: response });
}


export async function PUT(request: Request) {
  const options = await request.json();

  console.log(options);

  const response = await categoryService.update(options);

  return NextResponse.json({ data: response });
}

export async function DELETE(request: Request) {
  const categoryId = new URL(request.url).searchParams.get('categoryId')!;

  const response = await categoryService.delete({
    id: categoryId
  });

  return NextResponse.json({ data: response });
}