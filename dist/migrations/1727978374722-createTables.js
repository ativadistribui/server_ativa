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
exports.CreateTables1727978374722 = void 0;
class CreateTables1727978374722 {
    constructor() {
        this.name = 'CreateTables1727978374722';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "products" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "title" character varying NOT NULL,
            "type" character varying NOT NULL,
            "description" character varying NOT NULL,
            "userIdId" uuid,
            PRIMARY KEY ("id")
        )`);
            yield queryRunner.query(`CREATE TABLE "user" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "email" character varying NOT NULL,
            "password" character varying NOT NULL,
            PRIMARY KEY ("id")
        )`);
            yield queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_user" FOREIGN KEY ("userIdId") REFERENCES "user"("id") ON DELETE CASCADE`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_user"`);
            yield queryRunner.query(`DROP TABLE "user"`);
            yield queryRunner.query(`DROP TABLE "products"`);
        });
    }
}
exports.CreateTables1727978374722 = CreateTables1727978374722;
//# sourceMappingURL=1727978374722-createTables.js.map