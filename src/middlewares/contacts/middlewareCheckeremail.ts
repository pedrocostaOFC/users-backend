import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { Contact } from "../../entities/contact.entities";
import { AppError } from "../../errrors";
import { AppDataSource } from "../../data-source";


export async function checkerEmailMiddZiP(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const bodyEmail: string | undefined = req.body.email;
  if (bodyEmail) {
    const contact: Contact | null = await contactRepository.findOne({
      where: { email: bodyEmail },
    });
    if (contact) {
      throw new AppError("Email already exists", 409);
    }
  }

  next();
}
