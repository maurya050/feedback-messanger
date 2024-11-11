import {z} from "zod";

export const messageSchema = z.object({
    content: z
        .string()
        .min(10, {message: "Message must be atleast of 10 characters"})
        .max(300, {message: "Message must be no more than 30 0 characters"})
    
})