import prisma from '@/utils/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const allNotes = await prisma.note.findMany();
  console.log(allNotes);

  return NextResponse.json({ data: allNotes });
}
