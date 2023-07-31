import { Router } from "express";
import {
  listClientsContactsControl,
  listClientsContactsControlId,
} from "../../controllers/clients/clientsandcontacts/clientandcontacts.controller";
import { checkerIdMiddClient } from "../../middlewares/clientsandcontacts/middlewareCheckerIdclientescontacts";

export const clientandContactRoutes: Router = Router();
clientandContactRoutes.get("", listClientsContactsControl);
clientandContactRoutes.get(
  "/:id/contacts",
  checkerIdMiddClient,
  listClientsContactsControlId
);
