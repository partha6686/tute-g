const mongoose = require("mongoose");

const LectureSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    lect_no: { type: Number, required: true },
    sub: { type: String, required: true },
    imgsrc: { type: String, required: true },
    link: { type: String, required: true },
    time: { type: String, required: true },
    watched: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Lecture ||
  mongoose.model("Lecture", LectureSchema);
