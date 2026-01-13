// app/api/admin/airports/[icao]/route.ts
import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabaseServer';

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ icao: string }> },
) {
  const supabase = await createSupabaseServerClient();

  try {
    const icao = (await params).icao.toUpperCase(); // normalize ICAO
    const body = await req.json(); // the updated airport data from client

    // For now, let's just log it
    console.log('Updating airport:', icao, body);

    return NextResponse.json({ message: 'Received update', data: body });
  } catch (err) {
    console.error('Error in PATCH airport:', err);
    return NextResponse.json(
      { error: 'Failed to update airport' },
      { status: 500 },
    );
  }
}
