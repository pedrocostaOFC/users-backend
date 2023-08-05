import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1690935639122 implements MigrationInterface {
    name = 'InitialMigration1690935639122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "fullname" character varying(70) NOT NULL, "email" character varying(60) NOT NULL, "password" character varying(120) NOT NULL, "admin" boolean NOT NULL DEFAULT false, "telephone" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" SERIAL NOT NULL, "fullname" character varying(70) NOT NULL, "email" character varying(60) NOT NULL, "password" character varying(120) NOT NULL, "zipCode" character varying NOT NULL, "city" character varying NOT NULL, "street" character varying NOT NULL, "state" character varying NOT NULL, "country" character varying NOT NULL, "telephone" text NOT NULL, "admin" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "clientId" integer, CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "UQ_eef56fa2f5345a5d0e184615b50" UNIQUE ("zipCode"), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_8039454fab552403d5579cf7423" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_8039454fab552403d5579cf7423"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "clients"`);
    }

}
