import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID richiesto' },
        { status: 400 }
      );
    }

    const orders = await db.getOrders(userId);

    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json(
      { error: 'Errore nel recupero degli ordini' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json();

    const newOrder = await db.createOrder(orderData);

    return NextResponse.json(newOrder);
  } catch (error) {
    return NextResponse.json(
      { error: 'Errore nella creazione dell\'ordine' },
      { status: 500 }
    );
  }
}
