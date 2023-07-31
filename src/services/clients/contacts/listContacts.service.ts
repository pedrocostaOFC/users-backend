import { TcontactResponse } from "../../../interfaces/clientsinterface/contactsinterface.ts/contact.interfcace";
import { Repository } from "typeorm";
import { Contact } from "../../../entities/contact.entities";
import { AppDataSource } from "../../../data-source";
import { contactsSchemaResponse } from "../../../schemas/schemasClients/schemaContacts.ts/schemaContacts";
import { AppError } from "../../../errrors";

export const listContactsService = async (): Promise<TcontactResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const contact = await contactRepository.find();
  const contactResponse = contactsSchemaResponse.parse(contact);

  return contactResponse;
};
