import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [temperature, setTemperature] = useState(0)

  const getTemperature = async () => {
    const response = await fetch("/api/hello")
    const temperature = await response.json()
    setTemperature(temperature.temperature)
  }

  useEffect(() => {
    getTemperature()
  })

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Peter awoo 🍪 ありがとう凄いよ 
        <br />
        Weather in Berlin: {temperature}
      </div>
    </main>
  );
}
