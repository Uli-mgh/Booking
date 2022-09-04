import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  // console.log(token);
  if (!token) return next(createError(401, "Invalid Credentials"));

  jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
    // console.log(err);
    if (err) return next(createError(403, "Invalid Token"));

    // Asigno la nueva informacion a al req, el nombre no importa
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      return next();
    } else {
      if (err) return next(createError(403, "not authorized"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, " Not authorized"));
    }
  });
};
