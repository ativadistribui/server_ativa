"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productReturnSerializer = exports.productSerializer = void 0;
const yup = __importStar(require("yup"));
exports.productSerializer = yup
    .object()
    .shape({
    title: yup.string().required(),
    type: yup.string().required(),
    description: yup.string().required(),
    capacity: yup.array().required(),
    specificity: yup.string().required(),
    isFiled: yup.boolean().notRequired(),
    image: yup.string().required(),
});
exports.productReturnSerializer = yup.object({
    id: yup.string().required(),
    title: yup.string(),
    type: yup.string(),
    description: yup.string(),
    capacity: yup.array(),
    isFiled: yup.boolean(),
    specificity: yup.string(),
    updatedAt: yup.date(),
    deletedAt: yup.date().nullable(),
    registerDate: yup.date(),
    isDeleted: yup.boolean(),
    userId: yup.string(),
    image: yup.string(),
});
//# sourceMappingURL=product.serializer.js.map