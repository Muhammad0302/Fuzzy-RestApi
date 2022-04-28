import Quiz from "../models/quizModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

// post Quiz data

const postQuiz = asyncHandler(async (req, res) => {
  const quizeData = new Quiz({
    user_id: req.body.user_id,
    quesition: req.body.quesition,
    option: req.body.option,
  });
  try {
    const quiz = await quizeData.save();
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get quiz data daily base

const getQuizDaily = asyncHandler(async (req, res) => {
  try {
    const quiz = await Quiz.find({
      user_id: req.params.id,
      createdAt: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    });
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get quiz on weekly base

const getQuizWeekly = asyncHandler(async (req, res) => {
  try {
    const quiz = await Quiz.find({
      user_id: req.params.id,
      timestamp: {
        $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
      },
    });
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json(err);
  }
});

export { postQuiz, getQuizDaily, getQuizWeekly };
