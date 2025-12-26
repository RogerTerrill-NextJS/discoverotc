import React from "react";
import { getAirportByICAO } from "@/lib/data";

import Weather from "@/components/Weather";
import Runways from "@/components/Runways";
import Frequencies from "@/components/Frequencies";
import LocalTime from "@/components/LocalTime";
import HomeButton from "@/components/HomeButton";
import AirportHeader from "@/components/AirportHeader";
import ScrollToTop from "@/components/ScrollToTop";
import InfoSection from "@/components/InfoSection";
import DisplayDay from "@/components/DisplayDay";
import AdditionalVideos from "@/components/PreviousVideos";

export default async function AirportDetails({
  params,
}: {
  params: Promise<{ icao: string }>;
}) {
  const airport = getAirportByICAO((await params).icao);

  if (!airport) return <h1>Not Found</h1>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-300">
      <ScrollToTop />
      <HomeButton />
      <AirportHeader airport={airport} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          <InfoSection title="Summary" airport={airport}></InfoSection>
          <InfoSection
            title="Transient Parking"
            airport={airport}
          ></InfoSection>
          <InfoSection title="Restrooms" airport={airport}></InfoSection>
          <InfoSection title="Transportation" airport={airport}></InfoSection>
          <InfoSection title="Food" airport={airport}></InfoSection>
          <InfoSection title="FBO" airport={airport}></InfoSection>
          <InfoSection
            title="Terminal Building"
            airport={airport}
          ></InfoSection>
          <InfoSection title="Campground" airport={airport}></InfoSection>
          <InfoSection title="Museum" airport={airport}></InfoSection>
          <InfoSection title="Additional Info" airport={airport}></InfoSection>

          {/*<Places/>*/}
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <DisplayDay airport={airport} />
          <Weather airport={airport} />
          <Frequencies airport={airport} />
          <Runways airport={airport} />
          <AdditionalVideos airport={airport} />
          <LocalTime />
        </div>
      </div>
    </div>
  );
}
