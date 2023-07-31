import { Repository } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { Contact } from "../../../entities/contact.entities";
export const deleteContactService = async (id: number): Promise<Contact> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const item = await contactRepository.findOneOrFail({
    where: { id },
  });
  await contactRepository.remove(item);

  return item;
};
