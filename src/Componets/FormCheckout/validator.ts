import { z } from "zod";

export const schema = z.object({
    departureDate: z.string(),
    returnDate: z.string(),
    origin: z.string(),
    destination: z.string(),
    adultPassenger: z.number(),
    childPassenger: z.number(),
    name: z.string(),
    email: z.string(),
})

export type FormData = z.infer<typeof schema>