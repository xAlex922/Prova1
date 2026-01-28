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

    const appointments = await db.getAppointments(userId);

    return NextResponse.json(appointments);
  } catch (error) {
    return NextResponse.json(
      { error: 'Errore nel recupero degli appuntamenti' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const appointmentData = await request.json();

    const newAppointment = await db.createAppointment(appointmentData);

    return NextResponse.json(newAppointment);
  } catch (error) {
    return NextResponse.json(
      { error: 'Errore nella creazione dell\'appuntamento' },
      { status: 500 }
    );
  }
}
