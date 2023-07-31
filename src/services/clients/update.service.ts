import { Repository } from "typeorm";
import {
  TclientResponse,
  TclientUpdateRequest,
} from "../../interfaces/clientsinterface/clientinteface";
import { Client } from "../../entities/clientes.entities";
import { AppDataSource } from "../../data-source";
import { clientsSchemaResponse } from "../../schemas/schemasClients/schemaClients";

export const updateListService = async (
  Data: TclientUpdateRequest,
  id: number
): Promise<TclientResponse> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const oldClientData: Client | null = await clientRepository.findOneBy({
    id: id,
  });

  const newUserData: Client = clientRepository.create({
    ...oldClientData,
    ...Data,
  });
  await clientRepository.save(newUserData);

  const returnUser: TclientResponse = clientsSchemaResponse.parse(newUserData);

  return returnUser;
};
