import mongoose from "mongoose";

const quizModel = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    quesition: {
      type: String,
      required: true,
    },
    option: {
      happy: { type: Number, default: 0 },
      relax: { type: Number, default: 0 },
      sad: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

const Quiz = mongoose.model("quiz", quizModel);
export default Quiz;
