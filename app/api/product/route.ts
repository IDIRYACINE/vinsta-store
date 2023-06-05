import { NextResponse } from 'next/server';
import { ProductServicePort, FirebaseAdapter } from '@vinstacore';
 

const productService:ProductServicePort = FirebaseAdapter.productService();

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);

    const categoryId = searchParams.get('categoryId');

    const response = await productService.load({
        categoryId: categoryId
    })


 
  return NextResponse.json({ data:response });
}