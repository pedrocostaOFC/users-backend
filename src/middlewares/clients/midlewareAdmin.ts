import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errrors";
import { Contact } from "../../entities/contact.entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";


export const updateCheckerNotAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { decoded } = res.locals;
    const id = parseInt(req.params.id);

    const contactRepository: Repository<Contact> =
      AppDataSource.getRepository(Contact);

    const contact: Contact | null = await contactRepository.findOne({
      relations: {
        client: true,
      },
      where: { id: id },
    });

    if (!contact) {
      throw new AppError("Contact not found", 404);
    }

    // Assumindo que decoded.sub contém o ID do cliente do usuário conectado
    if (
      decoded.admin === false &&
      parseInt(decoded.sub) !== contact.client.id
    ) {
      throw new AppError("Insufficient permission", 403);
    }

    // Se o usuário tiver permissão, vá para o próximo middleware ou manipulador de rota
    next();
  } catch (err) {
    // Trate os erros passando-os para o error-handling middleware
    next(err);
  }
};
