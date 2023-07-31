import { z } from "zod";

const createClientsSchema = z.object({

  id: z.number(),

  fullname: z.string().max(45),

  email: z.string().max(45).email(),

  telephone: z.string().min(10),

  admin: z.boolean().default(false),

  password: z.string().max(120),

  createdAt: z.union([z.string(), z.date()]),
});

const clientsSchemaResponse = createClientsSchema.omit({
  password: true,
});

const clientsSchemaRequest = createClientsSchema.omit({
  id: true,
  createdAt: true,
});

const updatedClientsSchemaRequest = createClientsSchema

  .omit({
    id: true,
    createdAt: true,
  })
  .partial();
  
const allClientsSchemaResponseGet = createClientsSchema
  .omit({
    password: true,
  })
  .array();

export {
  allClientsSchemaResponseGet,
  clientsSchemaRequest,
  updatedClientsSchemaRequest,
  createClientsSchema,
  clientsSchemaResponse,
};
