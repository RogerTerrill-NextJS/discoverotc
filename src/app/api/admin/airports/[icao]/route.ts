import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabaseServer';
import { AirportObject } from '@/lib/importAirports';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ icao: string }> },
) {
  try {
    const supabase = await createSupabaseServerClient();

    const { icao } = await params;
    const body = await req.json();

    // Only update the fields that are sent in the request
    const updateData: Record<string, AirportObject> = {};

    // Map client field names to database column names
    const fieldMap: Record<string, string> = {
      name: 'name',
      city: 'city',
      state: 'state',
      elevation: 'elevation',
      latitude: 'latitude',
      longitude: 'longitude',
      imageUrl: 'image_url',
      diagramUrl: 'diagram_url',
      summary: 'summary',
      transientParking: 'transient_parking',
      fuel: 'fuel',
      restrooms: 'restrooms',
      transportation: 'transportation',
      food: 'food',
      fbo: 'fbo',
      terminalBuilding: 'terminal_building',
      campground: 'campground',
      museum: 'museum',
      additionalInfo: 'additional_info',
      displayDay: 'display_day',
    };

    for (const key in body) {
      if (fieldMap[key]) {
        updateData[fieldMap[key]] = body[key];
      }
    }

    const { data, error } = await supabase
      .from('airports')
      .update(updateData)
      .eq('icao', icao)
      .select()
      .single();

    if (error) {
      console.error('Supabase update error:', error);
      return NextResponse.json(
        { message: 'Failed to update airport', error },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: 'Airport updated successfully', data });
  } catch (err) {
    console.error('API route error:', err);
    return NextResponse.json(
      { message: 'Server error', error: err },
      { status: 500 },
    );
  }
}
