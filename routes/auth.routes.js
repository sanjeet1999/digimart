import express from "express";
import { signup, login , logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup",signup)

router.get("/logout",logout)

router.post("/login",login)

export default router