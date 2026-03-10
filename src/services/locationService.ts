import type { City } from "../types/city";

const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";

export async function searchCity(city : string) : Promise<City[]> {

  const res = await fetch(`${GEO_URL}?name=${city}`);

  if (!res.ok) {
    throw new Error("City not found");
  }

  const data = await res.json();

  return data.results;
}