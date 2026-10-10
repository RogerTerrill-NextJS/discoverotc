export default function PatchWallLoading() {
  return (
    <main aria-busy='true' aria-label='Loading the Patch Wall' className='min-h-screen bg-slate-50 px-6 py-24'>
      <div className='mx-auto max-w-6xl'>
        <h1 className='text-5xl font-bold text-slate-950'>The Patch Wall</h1>
        <p role='status' className='mt-6 text-slate-600'>Loading the collection…</p>
        <div aria-hidden='true' className='mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
          {Array.from({ length: 8 }, (_, i) => <div key={i} className='aspect-square rounded-xl bg-slate-200 motion-safe:animate-pulse' />)}
        </div>
      </div>
    </main>
  );
}
