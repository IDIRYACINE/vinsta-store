import { NextResponse } from 'next/server';
import {  OrderServicePort, FirebaseAdapter } from '@vinstacore';
 

// const orderService:OrderServicePort = FirebaseAdapter.ordersService();

export async function GET(request: Request) {

    // const response = await orderService.load({
    //   page: -1,
    //   limit: -1
    // })


 
  return NextResponse.json({ data:"response" });
}