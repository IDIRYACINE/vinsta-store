import { NextResponse } from 'next/server';
import { NextApiRequest } from 'next';
import { OrderServicePort, FirebaseAdapter } from '@vinstastore/vinstacore';


const orderService: OrderServicePort = FirebaseAdapter.ordersService();

export async function GET(
  request: NextApiRequest, { params }: { params: { orderId: string } }) {

  const { orderId } = params

  const response = (await orderService.find({
    orderId
  })).data



  return NextResponse.json({ data: response });
}