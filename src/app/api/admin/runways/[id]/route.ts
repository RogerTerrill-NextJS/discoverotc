import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabaseServer';

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const supabase = await createSupabaseServerClient();
    const runwayId = Number((await params).id);

    if (!runwayId) {
      return NextResponse.json(
        { message: 'Invalid runway ID' },
        { status: 400 },
      );
    }

    const { error } = await supabase
      .from('runways')
      .delete()
      .eq('id', runwayId);

    if (error) {
      console.error('Supabase delete error:', error);
      return NextResponse.json(
        { message: 'Failed to delete runway', error },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: 'Runway deleted successfully' });
  } catch (err) {
    console.error('Route error:', err);
    return NextResponse.json(
      { message: 'Server error', error: err },
      { status: 500 },
    );
  }
}
