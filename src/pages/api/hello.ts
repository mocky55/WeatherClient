// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  temperature: string | void;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const temperature = await getForecast()
  res.status(200).json({ name: "John Doe", temperature:temperature });
}

const getForecast = async () => {
  const forecastResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m")
  const forecast = await forecastResponse.json()
  console.log(`latitude: ${forecast.latitude} 
  longitude:  ${forecast.longitude}
  temperature: ${forecast.current.temperature_2m}`)
  return forecast.current.temperature_2m
}

