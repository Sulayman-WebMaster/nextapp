import { NextResponse } from 'next/server';
import { getProducts, addProduct } from '@/lib/products';

export async function GET() {
  const products = await getProducts();
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const newProduct = await req.json();
  const product = await addProduct(newProduct);
  return NextResponse.json(product, { status: 201 });
}