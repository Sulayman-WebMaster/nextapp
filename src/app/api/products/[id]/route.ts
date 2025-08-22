import { NextResponse } from 'next/server';
import { getProduct, updateProduct, deleteProduct } from '@/lib/products';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  return NextResponse.json(product);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const updatedData = await req.json();
  const product = await updateProduct(params.id, updatedData);
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  return NextResponse.json(product);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const product = await deleteProduct(params.id);
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  return NextResponse.json({ message: 'Product deleted' });
}