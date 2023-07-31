import { Repository } from "typeorm";
import { Client } from "../../../entities/clientes.entities";
import { AppDataSource } from "../../../data-source";
import { Contact } from "../../../entities/contact.entities";
export const listClientContactsService = async (): Promise<Client[]> => {
  const clientAndContactsRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const clientContacts: Client[] = await clientAndContactsRepository
    .createQueryBuilder("client")
    .leftJoinAndSelect("client.contacts", "contact")
    .select([
      "client.id",
      "client.fullname",
      "client.email",
      "client.telephone",
      "client.admin",
      "client.createdAt",
    ])
    .addSelect([
      "contact.id",
      "contact.fullname",
      "contact.email",
      "contact.zipCode",
      "contact.city",
      "contact.street",
      "contact.state",
      "contact.country",
      "contact.telephone",
      "contact.createdAt",
    ])
    .getMany();

  return clientContacts;
};
