import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1727978374722 implements MigrationInterface {
    name = 'CreateTables1727978374722'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "title" character varying NOT NULL,
            "type" character varying NOT NULL,
            "description" character varying NOT NULL,
            "userIdId" uuid,
            PRIMARY KEY ("id")
        )`);
        
        await queryRunner.query(`CREATE TABLE "user" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "email" character varying NOT NULL,
            "password" character varying NOT NULL,
            PRIMARY KEY ("id")
        )`);

        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_user" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }
}
