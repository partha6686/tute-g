import React, { useState } from "react";
import LectCard from "./LectCard";

const Exclusive = ({ data }) => {
  // const data = [
  //   {
  //     title: "Introduction",
  //     lect_no: 1,
  //     sub: "Programming",
  //     imgsrc:
  //       "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail4.jpg?updatedAt=1680883327422",
  //     link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
  //     time: "1hr 29min",
  //   },
  //   {
  //     title: "Operators",
  //     lect_no: 1,
  //     sub: "Programming",
  //     imgsrc:
  //       "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail3.jpeg?updatedAt=1680883327401",
  //     link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
  //     time: "1hr 07min",
  //   },
  //   {
  //     title: "Control Structure",
  //     lect_no: 1,
  //     sub: "Programming",
  //     imgsrc:
  //       "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail4.jpg?updatedAt=1680883327422",
  //     link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
  //     time: "1hr 10min",
  //   },
  //   {
  //     title: "Function",
  //     lect_no: 1,
  //     sub: "Programming",
  //     imgsrc:
  //       "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail-2.png?updatedAt=1680883327389",
  //     link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
  //     time: "1hr 57min",
  //   },
  //   {
  //     title: "Recursion",
  //     lect_no: 1,
  //     sub: "Programming",
  //     imgsrc:
  //       "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail-2.png?updatedAt=1680883327389",
  //     link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
  //     time: "2hr 03min",
  //   },
  //   {
  //     title: "Arrays",
  //     lect_no: 1,
  //     sub: "Programming",
  //     imgsrc:
  //       "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail-2.png?updatedAt=1680883327389",
  //     link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
  //     time: "1hr 29min",
  //   },
  // ];
  const [activeChap, setActiveChap] = useState(data[0]);

  const handleChapChange = (chap) => {
    setActiveChap(chap);
  };
  return (
    <div>
      <h2 className="text-lg md:text-3xl md:font-semibold mx-3 py-10">
        Exclusive Coding Course
      </h2>
      <div className="flex w-full lg:h-[550px]">
        <div className="w-1/3 ps-4 md:ps-8">
          {data.map((chap, idx) => (
            <p
              className={`text-center text-[10px] sm:text-sm md:text-lg leading-6 sm:leading-8 md:leading-10 my-6 sm:my-8 md:my-10  font-semibold hover:bg-slate-800 cursor-pointer ${
                activeChap.title === chap.title
                  ? "text-red-500"
                  : "text-slate-400"
              } rounded-s-lg`}
              key={chap.title}
              onClick={() => handleChapChange(chap)}
            >
              {chap.title}
            </p>
          ))}
        </div>
        <div className="w-2/3 h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px]">
          <LectCard sz="md" data={activeChap} />
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
