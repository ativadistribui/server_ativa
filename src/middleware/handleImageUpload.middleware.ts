import { NextFunction, Response, Request } from "express";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const handleImageUpload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  upload.single("image")(req, res, (err: any) => {
    if (err) {
      return res.status(400).json({ message: "Erro ao processar upload" });
    }

    req.body.image = req.file;

    next();
  });
};
