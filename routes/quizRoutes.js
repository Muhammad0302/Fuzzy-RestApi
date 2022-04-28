import express from "express";
import {
  postQuiz,
  getQuizDaily,
  getQuizWeekly,
} from "../controllers/quizController.js";
const router = express.Router();

// quiz table routes

router.post("/postQuiz", postQuiz);
router.get("/getDaily/:id", getQuizDaily);
router.get("/getWeekly/:id", getQuizWeekly);

export default router;
