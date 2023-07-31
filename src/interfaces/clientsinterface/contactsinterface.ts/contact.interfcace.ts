import { DeepPartial } from "typeorm";
import {
  contactsSchemaRequest,
  allContactsSchemaResponseGet,
  contactsSchemaResponse,
  updateContactsSchemaRequest,
  ContactsSchema,
  contactsSchemaResponseCreate,
  contactsSchemaResponseUpdate,
} from "../../../schemas/schemasClients/schemaContacts.ts/schemaContacts";
import { z } from "zod";
type TcontactRequest = z.infer<typeof contactsSchemaRequest>;
type TcontactResponse = z.infer<typeof contactsSchemaResponse>;
type TcreateContact = z.infer<typeof contactsSchemaResponseCreate>;
type Tcontact = z.infer<typeof ContactsSchema>;
type Tcontactupdate = DeepPartial<TcontactRequest>;
type TcontactGetList = z.infer<typeof allContactsSchemaResponseGet>;
type TcontactUpdateResponse = z.infer<typeof contactsSchemaResponseUpdate>;

export {
  TcreateContact,
  TcontactRequest,
  TcontactGetList,
  Tcontactupdate,
  TcontactResponse,
  Tcontact,
  TcontactUpdateResponse,
};
