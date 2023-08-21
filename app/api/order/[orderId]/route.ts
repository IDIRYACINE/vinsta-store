import { NextResponse,NextRequest } from 'next/server';
import { OrderServicePort, FirebaseAdapter } from '@vinstacore/index';


const orderService: OrderServicePort = FirebaseAdapter.ordersService();

export async function GET(
  request: NextRequest, { params }: { params: { orderId: string } }) {

  const { orderId } = params

  const response = (await orderService.find({
    orderId
  })).data



  return NextResponse.json({ data: response });
}