"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleImageUpload = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
const handleImageUpload = (req, res, next) => {
    upload.single("image")(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: "Erro ao processar upload" });
        }
        req.body.image = req.file;
        next();
    });
};
exports.handleImageUpload = handleImageUpload;
//# sourceMappingURL=handleImageUpload.middleware.js.map