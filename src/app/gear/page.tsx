import { createSupabaseServerClient } from '@/lib/supabaseServer';
import AffiliateCard from '@/components/AffiliateCard';

export type AffiliateProduct = {
  id: number;
  section: string;
  title: string;
  description: string;
  url: string;
  sort_order: number;
  active: boolean;
};

const SECTION_LABELS: Record<string, string> = {
  flight_planning: 'Flight Planning & Cockpit Setup',
  cameras: 'Our In-Flight Camera Setup',
  power: 'Power & Charging',
  audio: 'Audio Setup',
};

export default async function AffiliatesPage() {
  const supabase = await createSupabaseServerClient();

  const { data: products, error } = await supabase
    .from('affiliate_products')
    .select('*')
    .eq('active', true)
    .order('section')
    .order('title');

  if (error || !products) {
    console.error('Error loading products:', error);
    return <div>Error loading products.</div>;
  }

  // Group rows by section
  const grouped = products.reduce<Record<string, AffiliateProduct[]>>(
    (acc, item) => {
      if (!acc[item.section]) {
        acc[item.section] = [];
      }

      acc[item.section].push(item);
      return acc;
    },
    {},
  );

  return (
    <div className='max-w-5xl mx-auto px-4 py-10'>
      <h1 className='text-3xl font-bold text-slate-800 mb-2 text-center'>
        Affiliate Links
      </h1>

      <p className='text-slate-600 mb-10 text-center'>
        A lot of you have asked what we fly with and how we set up our cockpit
        when visiting new airports. Below is a simple list of the gear we
        personally rely on in the cockpit and on the road. Nothing sponsored,
        nothing overcomplicated — just what has worked well for us over time.
      </p>

      {Object.entries(grouped).map(([sectionTitle, items]) => (
        <div key={sectionTitle} className='mb-12'>
          <h2 className='text-center text-2xl uppercase font-bold mb-6'>
            {SECTION_LABELS[sectionTitle]}
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {items.map((item) => (
              <div
                key={item.id}
                className='border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow transition'
              >
                <AffiliateCard item={item} />
              </div>
            ))}
          </div>
        </div>
      ))}

      <footer className='pt-6 text-sm text-center text-slate-500'>
        Some of the links below may be affiliate links, which means we may earn
        a small commission at no additional cost to you. We only include gear we
        actually use and trust.
      </footer>
    </div>
  );
}
