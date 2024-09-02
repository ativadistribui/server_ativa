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
exports.handleError = void 0;
const appError_1 = require("./appError");
const handleError = (err, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (err instanceof appError_1.AppError) {
        return res.status(err.statusCode).json({
            message: err.message,
        });
    }
    console.log(err);
    return res.status(500).json({
        message: "Erro interno com o servidor",
    });
});
exports.handleError = handleError;
//# sourceMappingURL=handleError.js.map