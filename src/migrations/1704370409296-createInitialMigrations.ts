import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInitialMigrations1704370409296 implements MigrationInterface {
    name = 'CreateInitialMigrations1704370409296'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "capacity" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "capacity" DROP NOT NULL`);
    }

}
