import { NextResponse } from 'next/server';
import { ProductServicePort, FirebaseAdapter} from '@vinstacore';


const productService: ProductServicePort = FirebaseAdapter.productService();

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);

  const categoryId = searchParams.get('categoryId')!;

  const response = await productService.load({
    categoryId: categoryId
  })



  return NextResponse.json({ data: response });
}


export async function POST(request: Request) {

  const options = await request.json();

  const response = await productService.create(options);

  return NextResponse.json({ data: response });
}


export async function PUT(request: Request) {
  const options = await request.json();


  const response = await productService.update(options);

  return NextResponse.json({ data: response });
}

export async function DELETE(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const categoryId = searchParams.get('categoryId')!;
  const productId = searchParams.get('productId')!;

  const response = await productService.delete({
    categoryId, productId
  });

  return NextResponse.json({ data: response });
}