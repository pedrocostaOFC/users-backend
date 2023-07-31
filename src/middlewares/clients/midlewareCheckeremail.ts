import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { Client } from "../../entities/clientes.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errrors";

export async function checkerEmailMidd(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const bodyEmail: string | undefined = req.body.email;
  if (bodyEmail) {
    const client: Client | null = await clientRepository.findOne({
      where: { email: bodyEmail },
    });
    if (client) {
      throw new AppError("Email already exists", 409);
    }
  }

  next();
}
