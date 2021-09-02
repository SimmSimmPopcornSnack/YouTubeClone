// server/src/routes/user.js

import Prisma from "../../../node_modules/@prisma/client/index.js"
const { PrismaClient } = Prisma
import express from "express"

import { protect } from "../middleware/authorization.js";

const prisma = new PrismaClient();

function getUserRoutes() {
    const router = express.Router();
    router.get("/liked-videos", protect, getLikedVideos);

    return router;
}

function getLikedVideos(req, res) {
    let videos = Array(0);
    res.status(200).json({ videos });
}

export default getUserRoutes();
