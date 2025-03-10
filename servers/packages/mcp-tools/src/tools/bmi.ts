import { z } from "zod";

function calculateBMI(weightKg: number, heightM: number): number {
    return weightKg / (heightM * heightM);
}


export const bmiTool = {
    name: "calculate-bmi",
    description: "Calculate the BMI of a person",
    paramsSchema: z.object({
        weightKg: z.number(),
        heightM: z.number()
    }).shape,
    cb: (args: { weightKg: number, heightM: number }) => {
        const bmi = calculateBMI(args.weightKg, args.heightM);
        return {
            content: [{
                type: "text" as const,
                text: String(bmi)
            }]
        }
    }
}


calculateBMI(82,1.8)