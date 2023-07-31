import { DeepPartial } from "typeorm";
import {
  allClientsSchemaResponseGet,
  clientsSchemaRequest,
  createClientsSchema,
  clientsSchemaResponse,
} from "../../schemas/schemasClients/schemaClients";
import { z } from "zod";

type TclientRequest = z.infer<typeof clientsSchemaRequest>;
type TclientResponse = z.infer<typeof clientsSchemaResponse>;
type Tclient = z.infer<typeof createClientsSchema>;
type TclientUpdateRequest = DeepPartial<TclientRequest>;
type TclientGetList = z.infer<typeof allClientsSchemaResponseGet>;

export {
  TclientUpdateRequest,
  Tclient,
  TclientResponse,
  TclientRequest,
  TclientGetList,
};
