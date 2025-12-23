// import {GoogleGenAI} from "@google/genai";
// import {Airport, PlaceRecommendation} from "@/types";
//
// // Helper to validate API Key
// const getApiKey = (): string => {
//   const apiKey = process.env.API_KEY;
//   if (!apiKey) {
//     console.error("API_KEY is missing in environment variables.");
//     return "";
//   }
//   return apiKey;
// };
//
// export const generateAirportBriefing = async (airport: Airport): Promise<string> => {
//   const apiKey = getApiKey();
//   if (!apiKey) return "AI Service Unavailable: Missing API Key.";
//
//   const ai = new GoogleGenAI({apiKey});
//
//   try {
//     const response = await ai.models.generateContent({
//       model: 'gemini-2.5-flash',
//       contents: `Create a concise, professional pilot briefing for ${airport.name} (${airport.icao}) in ${airport.city}, ${airport.state}.
//
//       Please include:
//       1. A general overview of the airport's significance or usage.
//       2. Notable navigation or arrival procedures (generic summary).
//       3. Interesting facts or local attractions for visiting pilots.
//       4. Remarks on potential weather patterns typical for this location.
//
//       Keep it under 300 words. Format as plain text with clear paragraph breaks.`,
//     });
//
//     return response.text || "No details available at this time.";
//   } catch (error) {
//     console.error("Error fetching airport briefing:", error);
//     return "Unable to load AI briefing due to a network or service error.";
//   }
// };
//
// export const getNearbyPlaces = async (airport: Airport): Promise<PlaceRecommendation> => {
//   const apiKey = getApiKey();
//   if (!apiKey) return {text: "API Key missing.", chunks: []};
//
//   const ai = new GoogleGenAI({apiKey});
//
//   try {
//     const response = await ai.models.generateContent({
//       model: 'gemini-2.5-flash',
//       contents: `Find 3 highly-rated restaurants and 2 hotels near ${airport.name} in ${airport.city}, ${airport.state}.
//       Provide a brief 1-sentence description for each.`,
//       config: {
//         tools: [{googleMaps: {}}],
//         toolConfig: {
//           retrievalConfig: {
//             latLng: {
//               latitude: airport.latitude,
//               longitude: airport.longitude
//             }
//           }
//         }
//       },
//     });
//
//     // Extract grounding chunks if available
//     const chunks = (response.candidates?.[0]?.groundingMetadata?.groundingChunks || []).map(chunk => ({
//       ...chunk,
//       web: chunk.web ? {uri: chunk.web.uri ?? "", title: chunk.web.title ?? ""} : undefined,
//     })) as unknown as PlaceRecommendation['chunks'];
//
//     return {
//       text: response.text || "No recommendations found.",
//       chunks: chunks
//     };
//
//   } catch (error) {
//     console.error("Error fetching nearby places:", error);
//     return {text: "Unable to load nearby places.", chunks: []};
//   }
// };