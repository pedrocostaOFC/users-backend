import { z } from "zod";
const createLoginSchema = z.object({
  email: z.string().max(45).email(),
  password: z.string().max(120),
});

const createTokenResponseSchema = z.object({
  token: z.string(),
});
export { createLoginSchema, createTokenResponseSchema };
