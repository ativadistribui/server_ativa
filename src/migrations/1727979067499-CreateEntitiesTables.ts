import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEntitiesTables1727979067499 implements MigrationInterface {
    name = 'CreateEntitiesTables1727979067499'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "type" character varying NOT NULL, "description" character varying NOT NULL, "capacity" text array, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "registerDate" TIMESTAMP NOT NULL DEFAULT now(), "isFiled" boolean NOT NULL DEFAULT false, "specificity" character varying NOT NULL DEFAULT false, "isDeleted" boolean NOT NULL DEFAULT false, "image" character varying NOT NULL, "userIdId" uuid, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_63e5c9353741657abc833718dbd" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_63e5c9353741657abc833718dbd"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
