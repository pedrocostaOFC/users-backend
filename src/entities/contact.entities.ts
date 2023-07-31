import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { Client } from "./clientes.entities";
import { hashSync } from "bcryptjs";
import * as bcrypt from "bcryptjs";


@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 70 })
  fullname: string;

  @Column({ type: "varchar", length: 60, unique: true })
  email: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @Column({ unique: true })
  zipCode: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column({ type: "text" })
  telephone: string;

  @Column({ default: false })
  admin: boolean;

  @CreateDateColumn()
  createdAt?: string | Date;

  @ManyToOne(() => Client, (client) => client.contacts)
  client: Client;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isHash = bcrypt.getRounds(this.password);
    if (!isHash) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { Contact };
