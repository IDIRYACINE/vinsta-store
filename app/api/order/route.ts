import { NextResponse,NextRequest } from 'next/server';
import {  OrderServicePort, FirebaseAdapter } from '@vinstastore/vinstacore';
 

const orderService:OrderServicePort = FirebaseAdapter.ordersService();

export async function GET(request: NextRequest) {


    const response = (await orderService.load({
      page: -1,
      limit: -1
    })).data


 
  return NextResponse.json({ data:response });
}


export async function POST(request: Request) {
  const options = await request.json();


  const response = await orderService.create(options);

  return NextResponse.json({ data: response });
}


export async function PUT(request: Request) {
  const options = await request.json();


  const response = await orderService.update(options);

  return NextResponse.json({ data: response });
}

export async function DELETE(request: Request) {
  const orderId = new URL(request.url).searchParams.get('orderId')!;

  const response = await orderService.delete({
    orderId: orderId
  });

  return NextResponse.json({ data: response });
}