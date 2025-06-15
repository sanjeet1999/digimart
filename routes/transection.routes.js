import transectionAdd from "../controllers/transection.controller.js";
import express from "express"

const transections = express.Router()


transections.post("/payment",transectionAdd)

export default transections