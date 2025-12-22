import React from 'react';
import {fetchAirportWeather, getWeatherCondition} from "@/services/weatherService";
import {Airport} from "@/data/types";

const Weather = async ({airport}: { airport: Airport }) => {
  const weather = await fetchAirportWeather(airport.latitude, airport.longitude);
  return (
    <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-4 bg-blue-500 text-white">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Current Weather</h3>
          <svg className="w-5 h-5 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
          </svg>
        </div>
      </div>
      <div className="p-6">
        {/*  {weather.loading ? (*/}
        {/*    <div className="animate-pulse space-y-4">*/}
        {/*      <div className="h-8 bg-slate-100 rounded w-1/2"></div>*/}
        {/*      <div className="h-4 bg-slate-100 rounded w-3/4"></div>*/}
        {/*    </div>*/}
        {weather ? (
          <>
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-3">{getWeatherCondition(weather.current.weatherCode).icon}</span>
              <div>
                <div className="text-3xl font-bold text-slate-800">{weather.current.temp}°F</div>
                <div
                  className="text-sm text-slate-500">{getWeatherCondition(weather.current.weatherCode).label}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
              <div className="bg-slate-50 p-3 rounded-lg">
                <span className="block text-slate-400 text-xs uppercase">Wind</span>
                <span className="font-semibold text-slate-700">{weather.current.windSpeed} mph</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg">
                <span className="block text-slate-400 text-xs uppercase">Precip</span>
                <span className="font-semibold text-slate-700">{weather.current.precipitation}&#34;</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Forecast</h4>
              <div className="space-y-3">
                {weather.daily.map((day, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <div className="flex items-center w-16 font-medium text-slate-600">
                      <span className="mr-2">{getWeatherCondition(day.weatherCode).icon}</span>
                      {day.date}
                    </div>
                    <div className="flex-1 h-1.5 bg-slate-100 mx-3 rounded-full overflow-hidden">
                      {/* Simple visual bar for temperature range visualization could go here, but plain text is cleaner for now */}
                    </div>
                    <div className="text-slate-700 font-mono">
                      <span className="font-semibold">{Math.round(day.maxTemp)}°</span>
                      <span className="text-slate-400 mx-1">/</span>
                      <span className="text-slate-500">{Math.round(day.minTemp)}°</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <p className="text-slate-400 text-sm">Weather data currently unavailable.</p>
        )}
      </div>
    </section>
  );
};

export default Weather;