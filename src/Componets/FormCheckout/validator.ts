import { z } from "zod";

export const schema = z.object({
    departureDate: z.any().refine((value) => value !== null, { message: "Data de partida obrigatória." }),
    returnDate: z.any(),
    origin: z.string().min(1, { message: "Origem obrigatória." }),
    destination: z.string().min(1, { message: "Destino obrigatório." }),
    adultPassenger: z.number().min(1, { message: "Adultos obrigatórios." }),
    childPassenger: z.number(),
    name: z.string().min(1, { message: "Nome obrigatório." }),
    email: z.string().email({ message: "Email inválido." }),
})

export type FormData = z.infer<typeof schema>


