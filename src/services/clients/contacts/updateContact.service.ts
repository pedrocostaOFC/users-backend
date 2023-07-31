import { Repository } from "typeorm";
import {
  TcontactUpdateResponse,
  Tcontactupdate,
} from "../../../interfaces/clientsinterface/contactsinterface.ts/contact.interfcace";
import { AppDataSource } from "../../../data-source";
import { Contact } from "../../../entities/contact.entities";
import {
  contactsSchemaResponseUpdate,
} from "../../../schemas/schemasClients/schemaContacts.ts/schemaContacts";

export const updateContactService = async (
  Data: Tcontactupdate,
  id: number
): Promise<TcontactUpdateResponse> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  //   const oldContactData: Contact | null = await contactRepository.findOneBy({
  //     id: id,
  //   });
  const contact: Contact | null = await contactRepository.findOne({
    where: { id: id },
  });

  const newContactData: Contact = contactRepository.create({
    ...contact,
    ...Data,
  });
  await contactRepository.save(newContactData);

  const returnContact: TcontactUpdateResponse =
    contactsSchemaResponseUpdate.parse(newContactData);

  return returnContact;
};
