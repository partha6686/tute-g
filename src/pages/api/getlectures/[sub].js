import Lecture from "@/models/Lecture";
import connectDb from "../../../middleware/db";

const handler = async (req, res) => {
  const { sub } = req.query;
  try {
    let lectures = await Lecture.find({ sub });
    res.status(200).json(lectures);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default connectDb(handler);
