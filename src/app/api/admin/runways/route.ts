import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabaseServer';

export async function POST(req: NextRequest) {
  try {
    const supabase = await createSupabaseServerClient();

    const body = await req.json();

    const { airport_id, runway_id, length, width, surface } = body;

    if (!airport_id) {
      return NextResponse.json(
        { message: 'airport_id is required' },
        { status: 400 },
      );
    }

    const { data, error } = await supabase
      .from('runways')
      .insert({
        airport_id,
        runway_id,
        length,
        width,
        surface,
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating runway:', error);
      return NextResponse.json(
        { message: 'Failed to create runway', error },
        { status: 500 },
      );
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error('Create runway API error:', err);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
