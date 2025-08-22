import fs from 'fs/promises';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data/products.json');

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

export async function getProducts(): Promise<Product[]> {
  try {
    const data = await fs.readFile(dataFile, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((p) => p.id === parseInt(id, 10));
}

export async function addProduct(newProduct: Omit<Product, 'id'>): Promise<Product> {
  const products = await getProducts();
  const product = { ...newProduct, id: products.length + 1 };
  products.push(product);
  await fs.writeFile(dataFile, JSON.stringify(products, null, 2));
  return product;
}

export async function updateProduct(id: string, updatedData: Partial<Product>): Promise<Product | undefined> {
  const products = await getProducts();
  const index = products.findIndex((p) => p.id === parseInt(id, 10));
  if (index === -1) return undefined;
  products[index] = { ...products[index], ...updatedData };
  await fs.writeFile(dataFile, JSON.stringify(products, null, 2));
  return products[index];
}

export async function deleteProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  const index = products.findIndex((p) => p.id === parseInt(id, 10));
  if (index === -1) return undefined;
  const deleted = products.splice(index, 1)[0];
  await fs.writeFile(dataFile, JSON.stringify(products, null, 2));
  return deleted;
}