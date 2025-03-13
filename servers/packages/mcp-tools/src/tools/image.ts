import { z } from "zod";
import Replicate from 'replicate';
import dotenv from 'dotenv';
dotenv.config();

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

async function generateImage(prompt: string) {
    const input = {
        prompt: prompt,
    };

    const model = "black-forest-labs/flux-schnell";

    const [output] = await replicate.run(model, { input }) as [{ url: () => string }];
    const imageUrlObj = output.url();
    const imageUrl = imageUrlObj.toString();
    console.log("Generated image URL:", imageUrl);

    return imageUrl;
}

export const imageTool = {
    name: "image",
    description: "Generate an image from a prompt",
    paramsSchema: z.object({
        prompt: z.string()
    }).shape,
    cb: async (args: { prompt: string }) => {
        const url = await generateImage(args.prompt);
        return {
            content: [{
                type: "text" as const,
                text: url
            }]
        }
    }
}