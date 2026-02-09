import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabaseServer';

type IncomingRunway = {
  runway_id: string;
  length: number;
  width: number;
  surface: string;
};

export async function POST(req: NextRequest) {
  try {
    const supabase = await createSupabaseServerClient();

    const body = await req.json();

    const { airport_id, runways } = body as {
      airport_id: number;
      runways: IncomingRunway[];
    };

    if (!airport_id || !Array.isArray(runways)) {
      return NextResponse.json(
        { message: 'airport_id and runways[] are required' },
        { status: 400 },
      );
    }

    const rows = runways.map((r) => ({
      airport_id,
      runway_id: r.runway_id,
      length: r.length,
      width: r.width,
      surface: r.surface,
    }));

    const { data, error } = await supabase
      .from('runways')
      .insert(rows)
      .select();

    if (error) {
      console.error('Error creating runways:', error);
      return NextResponse.json(
        { message: 'Failed to create runways', error },
        { status: 500 },
      );
    }

    return NextResponse.json({ data });
  } catch (err) {
    console.error('Create runways API error:', err);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
