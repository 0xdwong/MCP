import { z } from "zod";


async function fetchWeather(city: string) {
    const response = await fetch(
        `https://wttr.in/${encodeURIComponent(city)}?format=j1`
    );
    const respData = await response.json();
    const weather = respData.current_condition || {};

    return weather;
}

export const weatherTool = {
    name: "weather",
    description: "Get the weather of a city",
    paramsSchema: z.object({
        city: z.string()
    }).shape,
    cb: async (args: { city: string }) => {
        const weather = await fetchWeather(args.city);
        return {
            content: [{ 
                type: "text" as const, 
                text: JSON.stringify(weather) 
            }]
        }
    }
}