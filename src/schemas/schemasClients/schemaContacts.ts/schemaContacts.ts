import { z } from "zod";
import { clientsSchemaResponse } from "../schemaClients";

const ContactsSchema = z.object({
  id: z.number(),
  fullname: z.string().max(70),
  email: z.string().email().max(60),
  password: z.string().max(120),
  zipCode: z.string().max(20),
  city: z.string(),
  street: z.string(),
  state: z.string(),
  country: z.string(),
  telephone: z.string(),
  admin: z.boolean().default(false),
  createdAt: z.date().optional(),
});


const contactsSchemaResponse = ContactsSchema.omit({ password: true }).array();
const contactsSchemaResponseCreate = ContactsSchema.omit({
  password: true,
}).extend({
  client: clientsSchemaResponse,
});

const contactsSchemaResponseUpdate = ContactsSchema.omit({
  password: true,
});

const contactsSchemaRequest = ContactsSchema.omit({
  id: true,
  createdAt: true,
});

const updateContactsSchemaRequest = ContactsSchema.omit({
  id: true,
  createdAt: true,
}).partial();
const allContactsSchemaResponseGet = ContactsSchema.omit({
  password: true,
}).array();

export {
  contactsSchemaResponse,
  contactsSchemaRequest,
  updateContactsSchemaRequest,
  allContactsSchemaResponseGet,
  ContactsSchema,
  contactsSchemaResponseCreate,
  contactsSchemaResponseUpdate,
};
