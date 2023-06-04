import { NextResponse } from 'next/server';
import { CategoryServicePort, FirebaseAdapter } from '@vinstacore';
 

const categoryService:CategoryServicePort = FirebaseAdapter.categoryService();

export async function GET(request: Request) {

    const response = await categoryService.load({
      page: -1,
      limit: -1
    })


 
  return NextResponse.json({ data:response });
}