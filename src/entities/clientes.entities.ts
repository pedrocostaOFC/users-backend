import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { OneToMany } from "typeorm";
import { Contact } from "./contact.entities";
import { hashSync } from "bcryptjs";
import * as bcrypt from "bcryptjs";

@Entity("clients")
class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 70 })
  fullname: string;

  @Column({ type: "varchar", length: 60, unique: true })
  email: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @Column({ default: false })
  admin: boolean;

  @Column({ type: "text" })
  telephone: string;

  @CreateDateColumn()
  createdAt?: string | Date;

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: Contact[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isHash = bcrypt.getRounds(this.password);
    if (!isHash) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { Client };
