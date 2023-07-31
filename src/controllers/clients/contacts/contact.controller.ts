import { Contact } from "../../../entities/contact.entities";
import {
  TcontactRequest,
  TcontactResponse,
  TcontactUpdateResponse,
  Tcontactupdate,
  TcreateContact,
} from "../../../interfaces/clientsinterface/contactsinterface.ts/contact.interfcace";
import { Request, Response } from "express";
import { createContactService } from "../../../services/clients/contacts/createcontact.service";
import { listContactsService } from "../../../services/clients/contacts/listContacts.service";
import { updateContactService } from "../../../services/clients/contacts/updatecontact.service";
import { deleteContactService } from "../../../services/clients/contacts/deletecontact.service";


export const createContactControl = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactData: TcontactRequest = req.body;
  const { decoded } = res.locals;
  const newContact: TcreateContact = await createContactService(
    contactData,
    decoded.sub
  );
  return res.status(201).json(newContact);
};
export const listContactControl = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listContact: TcontactResponse = await listContactsService();
  return res.status(200).json(listContact);
};
export const updateContactControl = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const Data: Tcontactupdate = req.body;
  const id: number = parseInt(req.params.id);
  const updateContact: TcontactUpdateResponse = await updateContactService(
    Data,
    id
  );
  return res.status(200).json(updateContact);
};
export const deleteContactControl = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  const deleteContact: Contact = await deleteContactService(id);
  return res.status(204).json(deleteContact);
};
