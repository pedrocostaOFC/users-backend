import { Router } from "express";
import { loginUserControl } from "../../../controllers/clients/login/login.client.controllers";
export const loginRoutes: Router = Router();

loginRoutes.post("", loginUserControl);
