import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppError } from "../../errrors";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/clientes.entities";

export async function checkerIdMiddClient(
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
    throw new AppError("Contact not found", 404);
  }

  next();
}
