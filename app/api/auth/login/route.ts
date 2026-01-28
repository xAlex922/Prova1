import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const user = await db.login(email, password);

    if (user) {
      return NextResponse.json(user);
    } else {
      return NextResponse.json(
        { error: 'Credenziali non valide' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Errore del server' },
      { status: 500 }
    );
  }
}
