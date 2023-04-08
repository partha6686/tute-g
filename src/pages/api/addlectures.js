import Lecture from "@/models/Lecture";
import connectDb from "../../middleware/db";

const handler = async (req, res) => {
  try {
    if (req.method == "POST") {
      for (let i = 0; i < req.body.length; i++) {
        let item = new Lecture({
          title: req.body[i].title,
          lect_no: req.body[i].lect_no,
          sub: req.body[i].sub,
          imgsrc: req.body[i].imgsrc,
          link: req.body[i].link,
          time: req.body[i].time,
        });
        await item.save();
      }
      res.status(200).json({ msg: "Successfully added products" });
    } else {
      res.status(400).json({ error: "Bad Request" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error Occured" });
    console.log(error);
  }
};

export default connectDb(handler);
