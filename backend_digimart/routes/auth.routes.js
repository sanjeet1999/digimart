import express from "express";
import { signup, login , logout, updateUser } from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup",signup)

router.get("/logout",logout) 

router.post("/login",login)

router.put("/user/update", authenticate, updateUser)

export default router