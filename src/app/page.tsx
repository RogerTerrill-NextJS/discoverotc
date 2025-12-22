import Hero from "@/components/Hero";
import Search from "@/components/Search";
import AirportGrid from "@/components/AirportGrid";
import Footer from "@/components/Footer";

export default async function Home(props: {
  searchParams?: Promise<{
    term?: string;
  }>
}) {
  const searchParams = await props.searchParams;
  const term = searchParams?.term ?? '';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <Hero/>
            <Search/>
          </div>
          <AirportGrid term={term}/>
        </div>
      </main>
      <Footer/>
    </div>

  );
}
