import { cookies } from 'next/headers';

// Simple session-based auth for the admin dashboard
// In production, use a proper auth library like NextAuth.js

const SESSION_COOKIE = 'puurgeeske_admin_session';
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || 'change-this-in-production-2024';

// Simple hash function for demo purposes
// In production, use bcrypt or similar
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16);
}

export async function createSession(): Promise<string> {
  const sessionId = simpleHash(Date.now().toString() + SESSION_SECRET + Math.random());
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
  });
  return sessionId;
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE);
  return !!session?.value;
}

export function verifyPassword(password: string): boolean {
  // Default password is "puurgeeske2024" - should be changed in production
  const correctPassword = process.env.ADMIN_PASSWORD || 'puurgeeske2024';
  return password === correctPassword;
}
