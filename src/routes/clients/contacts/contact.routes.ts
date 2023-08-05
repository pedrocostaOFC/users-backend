import { Router } from "express";
import {
  createContactControl,
  deleteContactControl,
  listContactControl,
  updateContactControl,
} from "../../../controllers/clients/contacts/contact.controller";
import { checkerBodyValid } from "../../../middlewares/clients/midlwareCheckerbody";
import {
  contactsSchemaRequest,
  updateContactsSchemaRequest,
} from "../../../schemas/schemasClients/schemaContacts.ts/schemaContacts";

import { checkerZipCodeMidd } from "../../../middlewares/contacts/middlewareCheckerzipcode";
import { checkerEmailMiddZiP } from "../../../middlewares/contacts/middlewareCheckeremail";
import { checkerTokenValidMidd } from "../../../middlewares/login/midlewarews.token";
import { updateCheckerNotAdmin } from "../../../middlewares/clients/midlewareAdmin";
import { checkerIdMiddContact } from "../../../middlewares/clients/midlewaresCheckerid";

export const contactRoutes: Router = Router();

contactRoutes.post(
  "",
  checkerBodyValid(contactsSchemaRequest),
  checkerEmailMiddZiP,
  checkerZipCodeMidd,
  checkerTokenValidMidd,
  createContactControl
);

contactRoutes.patch(
  "/:id",
  checkerIdMiddContact,
  checkerBodyValid(updateContactsSchemaRequest),
  checkerEmailMiddZiP,
  checkerZipCodeMidd,
  checkerTokenValidMidd,
  updateCheckerNotAdmin,
  updateContactControl
);

contactRoutes.get("", listContactControl);

contactRoutes.delete(
  "/:id",
  checkerIdMiddContact,
  checkerTokenValidMidd,
  updateCheckerNotAdmin,
  deleteContactControl
);


