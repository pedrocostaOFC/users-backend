import { z } from "zod";
import {
  createLoginSchema,
  createTokenResponseSchema,
} from "../../schemas/schemasClients/schemalogin.ts/schemaLogin";
type TloginRequest = z.infer<typeof createLoginSchema>;

type TtokenLoginResponse = z.infer<typeof createTokenResponseSchema>;
export { TloginRequest, TtokenLoginResponse };
