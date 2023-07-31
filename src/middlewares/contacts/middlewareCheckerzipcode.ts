import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppError } from "../../errrors";
import { Contact } from "../../entities/contact.entities";
import { AppDataSource } from "../../data-source";


export async function checkerZipCodeMidd(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);
  const bodyZip: string | undefined = req.body.zipCode;
  if (bodyZip) {
    const contact: Contact | null = await contactRepository.findOne({
      where: { zipCode: bodyZip },
    });
    if (contact) {
      throw new AppError("ZipCode already exists", 409);
    }
  }

  next();
}
