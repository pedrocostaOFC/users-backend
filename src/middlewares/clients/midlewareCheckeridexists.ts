import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errrors";
import { Contact } from "../../entities/contact.entities";
import { Client } from "../../entities/clientes.entities";

export async function checkerIdMidClient(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const id: number = parseInt(req.params.id);

  const client: Client | null = await clientRepository.findOne({
    where: { id: id },
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  next();
}
