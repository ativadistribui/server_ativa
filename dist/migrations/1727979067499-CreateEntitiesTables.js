"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEntitiesTables1727979067499 = void 0;
class CreateEntitiesTables1727979067499 {
    constructor() {
        this.name = 'CreateEntitiesTables1727979067499';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "type" character varying NOT NULL, "description" character varying NOT NULL, "capacity" text array, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "registerDate" TIMESTAMP NOT NULL DEFAULT now(), "isFiled" boolean NOT NULL DEFAULT false, "specificity" character varying NOT NULL DEFAULT false, "isDeleted" boolean NOT NULL DEFAULT false, "image" character varying NOT NULL, "userIdId" uuid, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_63e5c9353741657abc833718dbd" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_63e5c9353741657abc833718dbd"`);
            yield queryRunner.query(`DROP TABLE "user"`);
            yield queryRunner.query(`DROP TABLE "products"`);
        });
    }
}
exports.CreateEntitiesTables1727979067499 = CreateEntitiesTables1727979067499;
//# sourceMappingURL=1727979067499-CreateEntitiesTables.js.map