import { NextResponse } from 'next/server';
import { CategoryServicePort, CreateCategoryOptionsFromJson, CreateCategoryProps, FirebaseAdapter, UpdateCategoryOptionsFromJson } from '@vinstacore';
 

const categoryService:CategoryServicePort = FirebaseAdapter.categoryService();

export async function GET(request: Request) {

    const response = await categoryService.load({
      page: -1,
      limit: -1
    })


 
  return NextResponse.json({ data:response });
}

export async function POST(request: Request) {
  const body = await request.json();

  const options = CreateCategoryOptionsFromJson(body);

  const response = await categoryService.create(options);

  return NextResponse.json({ data:response });
}


export async function PUT(request: Request) {
  const body = await request.json();

  const options = UpdateCategoryOptionsFromJson(body);

  const response = await categoryService.update(options);

  return NextResponse.json({ data:response });
}

export async function DELETE(request: Request) {
  const categoryId = new URL(request.url).searchParams.get('categoryId');

  const response = await categoryService.delete({
    id: categoryId
  });

  return NextResponse.json({ data:response });
}