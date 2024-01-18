import * as express from "express";
import { Multer } from "multer";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
      };
      file: Multer.File;
    }
  }
}

export {};
