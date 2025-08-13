import { NextResponse } from 'next/server';

interface Body { name?: string; email?: string; message?: string }

export async function POST(req: Request) {
  try {
    const body: Body = await req.json();
    if (!body.name || !body.email || !body.message) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(body.email)) return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    console.log('CONTACT_MESSAGE', body);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
