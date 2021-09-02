// server/src/middleware/authorization.js

import Prisma from "../../../node_modules/@prisma/client/index.js"
const { PrismaClient } = Prisma
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function protect(req, res, next) {
    // next()
    // if (!next) {
    //     return "Next is empty";
    // }
    if (!req) {
        let err = new Error();
        err.statusCode = 401;
        err.message = "Request is empty";
    } else if (!req.cookies) {
        let err = new Error();
        err.statusCode = 401;
        err.message = "Cookies are empty";
        return next(err);
    } else if (!req.cookies.token) {
        let err = new Error();
        err.statusCode = 401;
        err.message = "You need to be logged in to visit this route";
        return next(err);
    }

    try {
        const token = req.cookies.token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await prisma.user.findUnique({
            where: {
                id: decoded.id,
            },
            include: {
                videos: true,
            },
        });

        req.user = user;
        next();
    } catch (error) {
        let err = new Error();
        err.statusCode = 401;
        err.message = "You need to be logged in to visit this route";
        return next(err);
    }
}
