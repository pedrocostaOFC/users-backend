import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errrors";
import { Contact } from "../../entities/contact.entities";
import { Client } from "../../entities/clientes.entities";

export async function checkerIdMidd(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const contactRepository: Repository<Client> =
    AppDataSource.getRepository(Client);
  const id: number = parseInt(req.params.id);

  const client: Client | null = await contactRepository.findOne({
    where: { id: id },
  });

  if (!client) {
    throw new AppError("Contact not found", 404);
  }

  next();
}
