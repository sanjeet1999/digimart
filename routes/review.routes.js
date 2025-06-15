import reviewAdded from "../controllers/review.controller.js";
import express from "express"

const review = express.Router()

review.post("/reviewAdd",reviewAdded)

export default review