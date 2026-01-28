import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const userData = await request.json();

    const newUser = await db.register(userData);

    return NextResponse.json(newUser);
  } catch (error) {
    return NextResponse.json(
      { error: 'Errore durante la registrazione' },
      { status: 500 }
    );
  }
}
