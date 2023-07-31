import { Request, Response } from "express";
import { Client } from "../../entities/clientes.entities";
import {
  TclientRequest,
  TclientResponse,
  TclientUpdateRequest,
} from "../../interfaces/clientsinterface/clientinteface";
import { listClientService } from "../../services/clients/clientlistuser.service";
import { createClientService } from "../../services/clients/createClient.service";
import { updateListService } from "../../services/clients/update.service";
import { deleteClientService } from "../../services/deleteservices";

export const createClientsControl = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TclientRequest = req.body;
  const newClient: TclientResponse = await createClientService(userData);
  return res.status(201).json(newClient);
};

export const listedClientControl = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listClient: TclientResponse[] = await listClientService();
  return res.status(200).json(listClient);
};

export const updatedListControl = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const Data: TclientUpdateRequest = req.body;
  const id: number = parseInt(req.params.id);
  const updateList: TclientResponse = await updateListService(Data, id);
  return res.status(200).json(updateList);
};

export const deletedListControl = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  const deleteUser: Client = await deleteClientService(id);
  return res.status(204).json(deleteUser);
};
