import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import AirportGrid from "@/components/AirportGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <Hero/>
          <Search/>
        </div>
        <AirportGrid/>
      </div>
    </div>
  );
}
