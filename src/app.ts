import "express-async-errors";
import "reflect-metadata";
import cors from "cors"

import express, { Application } from "express";

import { clientsRoutes } from "./routes/clients/client.routes";
import { handleErrors } from "./errrors";
import { loginRoutes } from "./routes/clients/login/login.routes";
import { contactRoutes } from "./routes/clients/contacts/contact.routes";
import { clientandContactRoutes } from "./routes/clientsecontacts/clientecontacts.routes";



const app: Application = express();
app.use(cors());
app.use(express.json());
app.use("/clients", clientsRoutes);
app.use("/login", loginRoutes);
app.use("/contacts", contactRoutes);
app.use("/clients", clientandContactRoutes);
app.use(handleErrors);
export default app;
