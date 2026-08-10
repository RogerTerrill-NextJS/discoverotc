'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams}` : '');

    window.gtag?.('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}

export function trackAirportSearch(searchTerm: string, resultCount: number) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'search', {
    search_term: searchTerm,
    result_count: resultCount,
  });
}

export function trackAirportSelection({
  searchTerm,
  airportName,
  icao,
}: {
  searchTerm: string;
  airportName: string;
  icao: string;
}) {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'select_airport', {
    search_term: searchTerm,
    airport_name: airportName,
    airport_icao: icao,
  });
}
