import { Request, Response } from "express";
import {
  TloginRequest,
  TtokenLoginResponse,
} from "../../../interfaces/logininterface.ts/logininterface";
import { createLoginService } from "../../../services/loginclient";


export const loginUserControl = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const loginData: TloginRequest = req.body;
  const token: TtokenLoginResponse = await createLoginService(loginData);
  return res.status(200).json(token);
};
