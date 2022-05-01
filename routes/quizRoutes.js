import express from "express";
import {
  postQuiz,
  getQuizDaily,
  getQuizWeekly,
  getQuizSpecficData,
} from "../controllers/quizController.js";
const router = express.Router();

// quiz table routes

router.post("/postQuiz", postQuiz);
router.get("/getDaily/:id", getQuizDaily);
router.get("/getWeekly/:id", getQuizWeekly);
router.get("/getSpecficDate/:id", getQuizSpecficData);

export default router;
