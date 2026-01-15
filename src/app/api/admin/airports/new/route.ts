import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabaseServer';
import { AirportObject } from '@/lib/importAirports';

export async function POST(req: NextRequest) {
  try {
    const supabase = await createSupabaseServerClient();
    const body: AirportObject = await req.json();

    // Minimal required fields validation
    if (!body.icao || !body.name || !body.city || !body.state) {
      return NextResponse.json(
        { message: 'Missing required fields: icao, name, city, state' },
        { status: 400 },
      );
    }

    // Insert airport
    const { data, error } = await supabase
      .from('airports')
      .insert([
        {
          icao: body.icao.toUpperCase(),
          name: body.name,
          city: body.city,
          state: body.state.toUpperCase(),
          elevation: body.elevation ?? null,
          latitude: body.latitude ?? null,
          longitude: body.longitude ?? null,
          image_url: body.imageUrl ?? null,
          diagram_url: body.diagramUrl ?? null,
          summary: body.summary ?? null,
          transient_parking: body.transientParking ?? null,
          fuel: body.fuel ?? null,
          restrooms: body.restrooms ?? null,
          transportation: body.transportation ?? null,
          food: body.food ?? null,
          fbo: body.fbo ?? null,
          terminal_building: body.terminalBuilding ?? null,
          campground: body.campground ?? null,
          museum: body.museum ?? null,
          additional_info: body.additionalInfo ?? null,
          display_day: body.displayDay ?? null,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { message: 'Failed to create airport', error },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: 'Airport created successfully', data });
  } catch (err) {
    console.error('API route error:', err);
    return NextResponse.json(
      { message: 'Server error', error: err },
      { status: 500 },
    );
  }
}
