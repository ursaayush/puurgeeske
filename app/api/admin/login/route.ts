import { NextRequest, NextResponse } from 'next/server';
import { createSession, verifyPassword } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json(
        { error: 'Wachtwoord is verplicht' },
        { status: 400 }
      );
    }

    if (!verifyPassword(password)) {
      return NextResponse.json(
        { error: 'Onjuist wachtwoord' },
        { status: 401 }
      );
    }

    await createSession();

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Er ging iets mis' },
      { status: 500 }
    );
  }
}
