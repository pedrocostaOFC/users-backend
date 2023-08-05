import { Router } from "express";
import {
  createClientsControl,
  deletedListControl,
  listedClientControl,
  updatedListControl,
} from "../../controllers/clients/client.controller";
import { checkerBodyValid } from "../../middlewares/clients/midlwareCheckerbody";
import {
  clientsSchemaRequest,
  updatedClientsSchemaRequest,
} from "../../schemas/schemasClients/schemaClients";
import { checkerEmailMidd } from "../../middlewares/clients/midlewareCheckeremail";
import { checkerIdMidClient } from "../../middlewares/clients/midlewareCheckeridexists";
import { checkerTokenValidMidd } from "../../middlewares/login/midlewarews.token";
import { updateCheckerNotAdmin } from "../../middlewares/clients/midlewareAdmin";
export const clientsRoutes: Router = Router();

clientsRoutes.post(
  "",
  checkerBodyValid(clientsSchemaRequest),

  checkerEmailMidd,

  createClientsControl

);

clientsRoutes.patch(

  "/:id",
  checkerIdMidClient,

  checkerBodyValid(updatedClientsSchemaRequest),

  checkerTokenValidMidd,

  updateCheckerNotAdmin,

  updatedListControl

);

clientsRoutes.get("", listedClientControl);

clientsRoutes.delete(

  "/:id",

  checkerIdMidClient,

  checkerTokenValidMidd,

  updateCheckerNotAdmin,
  
  deletedListControl
);
