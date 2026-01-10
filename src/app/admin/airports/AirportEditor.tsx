'use client';

import { useState } from 'react';

type AirportFormData = {
  icao: string;
  name: string;
  city: string;
  state: string;
  elevation?: number;
  latitude?: number;
  longitude?: number;
  imageUrl?: string;
  diagramUrl?: string;

  summary?: string;
  transientParking?: string;
  fuel?: string;
  restrooms?: string;
  transportation?: string;
  food?: string;
  fbo?: string;
  terminalBuilding?: string;
  campground?: string;
  museum?: string;
  additionalInfo?: string;
  displayDay?: string;
};

function TextInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value?: string | number;
  onChange: (v: string) => void;
}) {
  return (
    <div className='flex flex-col'>
      <label className='text-sm font-medium text-gray-700 mb-1'>{label}</label>
      <input
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500'
      />
    </div>
  );
}

function TextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className='flex flex-col'>
      <label className='text-sm font-medium text-gray-700 mb-1'>{label}</label>
      <textarea
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        className='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 min-h-20'
      />
    </div>
  );
}

export default function AirportEditor({
  initialData,
}: {
  initialData?: AirportFormData;
}) {
  const [form, setForm] = useState<AirportFormData>(
    initialData ?? { icao: '', name: '', city: '', state: '' },
  );

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  function updateField(field: keyof AirportFormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function saveAirport() {
    setSaving(true);
    setMessage(null);

    const res = await fetch('/api/admin/airports/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setSaving(false);

    if (!res.ok) {
      setMessage('❌ Failed to save airport');
      return;
    }

    setMessage('✅ Airport saved successfully');
  }

  return (
    <div className='max-w-5xl mx-auto space-y-8'>
      {/* Core Airport Info */}
      <section className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm'>
        <h2 className='text-xl font-semibold text-gray-800 mb-4'>
          Airport Information
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <TextInput
            label='ICAO'
            value={form.icao}
            onChange={(v) => updateField('icao', v.toUpperCase())}
          />
          <TextInput
            label='Name'
            value={form.name}
            onChange={(v) => updateField('name', v)}
          />
          <TextInput
            label='City'
            value={form.city}
            onChange={(v) => updateField('city', v)}
          />
          <TextInput
            label='State'
            value={form.state}
            onChange={(v) => updateField('state', v.toUpperCase())}
          />
          <TextInput
            label='Elevation (ft)'
            value={form.elevation}
            onChange={(v) => updateField('elevation', v)}
          />
          <TextInput
            label='Latitude'
            value={form.latitude}
            onChange={(v) => updateField('latitude', v)}
          />
          <TextInput
            label='Longitude'
            value={form.longitude}
            onChange={(v) => updateField('longitude', v)}
          />
          <TextInput
            label='Image URL'
            value={form.imageUrl}
            onChange={(v) => updateField('imageUrl', v)}
          />
          <TextInput
            label='Diagram URL'
            value={form.diagramUrl}
            onChange={(v) => updateField('diagramUrl', v)}
          />
        </div>
      </section>

      {/* Description Section */}
      <section className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm space-y-4'>
        <h2 className='text-xl font-semibold text-gray-800 mb-4'>
          Airport Descriptions
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <TextArea
            label='Diagram URL'
            value={form.diagramUrl}
            onChange={(v) => updateField('diagramUrl', v)}
          />

          <TextArea
            label='Summary'
            value={form.summary}
            onChange={(v) => updateField('summary', v)}
          />

          <TextArea
            label='Transient Parking'
            value={form.transientParking}
            onChange={(v) => updateField('transientParking', v)}
          />

          <TextArea
            label='Fuel'
            value={form.fuel}
            onChange={(v) => updateField('fuel', v)}
          />

          <TextArea
            label='Restrooms'
            value={form.restrooms}
            onChange={(v) => updateField('restrooms', v)}
          />

          <TextArea
            label='Transportation'
            value={form.transportation}
            onChange={(v) => updateField('transportation', v)}
          />

          <TextArea
            label='Food'
            value={form.food}
            onChange={(v) => updateField('food', v)}
          />

          <TextArea
            label='FBO'
            value={form.fbo}
            onChange={(v) => updateField('fbo', v)}
          />

          <TextArea
            label='Terminal Building'
            value={form.terminalBuilding}
            onChange={(v) => updateField('terminalBuilding', v)}
          />

          <TextArea
            label='Campground'
            value={form.campground}
            onChange={(v) => updateField('campground', v)}
          />

          <TextArea
            label='Museum'
            value={form.museum}
            onChange={(v) => updateField('museum', v)}
          />

          <TextArea
            label='Additional Info'
            value={form.additionalInfo}
            onChange={(v) => updateField('additionalInfo', v)}
          />

          <TextArea
            label='Display Day'
            value={form.displayDay}
            onChange={(v) => updateField('displayDay', v)}
          />
        </div>
      </section>

      {/* Actions */}
      <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
        <button
          onClick={saveAirport}
          disabled={saving}
          className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 transition'
        >
          {saving ? 'Saving...' : 'Save Airport'}
        </button>
        {message && <span className='text-gray-700 text-sm'>{message}</span>}
      </div>
    </div>
  );
}
