import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function PUT(request: NextRequest) {
  try {
    const { userId, data } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID richiesto' },
        { status: 400 }
      );
    }

    const updatedUser = await db.updateUser(userId, data);

    if (updatedUser) {
      return NextResponse.json(updatedUser);
    } else {
      return NextResponse.json(
        { error: 'Utente non trovato' },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Errore nell\'aggiornamento' },
      { status: 500 }
    );
  }
}
