import express from "express";
import { addQuiz, checkQuiz, getQuiz } from "../controllers/quiz.controller.js";

const router = express.Router();

router.post("/addQuiz", addQuiz);
router.get("/getQuiz/:pin", getQuiz);
router.get("/check/:pin", checkQuiz);

export default router;
