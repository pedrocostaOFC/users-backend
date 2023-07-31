import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Client } from "../entities/clientes.entities";
export const deleteClientService = async (id: number): Promise<Client> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const item = await clientRepository.findOneOrFail({
    where: { id },
  });
  await clientRepository.remove(item);

  return item;
};
