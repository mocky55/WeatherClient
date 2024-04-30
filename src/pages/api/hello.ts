// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  temperature: string | void;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const temperature = await getForecast()
  res.status(200).json({temperature:temperature });
}

const getForecast = async () => {
  const forecastResponse = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min&timezone=GMT")
  const forecast = await forecastResponse.json()
  return forecast.daily
}

