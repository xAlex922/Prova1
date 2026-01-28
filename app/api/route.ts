import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');

    const products = await db.getProducts(category || undefined);

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: 'Errore nel recupero dei prodotti' },
      { status: 500 }
    );
  }
}
