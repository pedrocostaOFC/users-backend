import { Repository } from "typeorm";
import {
  TloginRequest,
  TtokenLoginResponse,
} from "../interfaces/logininterface.ts/logininterface";
import { Client } from "../entities/clientes.entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errrors";
import { compare } from "bcryptjs";
import * as jwt from "jsonwebtoken";
import "dotenv/config";
export const createLoginService = async (
  loginData: TloginRequest
): Promise<TtokenLoginResponse> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const client: Client | null = await clientRepository.findOne({
    where: {
      email: loginData.email,
    },
  });
  if (!client) {
    throw new AppError("Invalid credentials", 401);
  }

  var passwordMatch = await compare(loginData.password, client.password);

  if (!passwordMatch) {
    throw new AppError("Invalid credentials2", 401);
  }

  const token: string = jwt.sign(
    {
      admin: client.admin,
    },
    String(process.env.SECRET_KEY!),
    {
      expiresIn: "24h",
      subject: String(client.id),
    }
  );
  return { token };
};
