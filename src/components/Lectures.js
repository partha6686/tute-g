import React, { useEffect, useState } from "react";
import LectCard from "./LectCard";

const Lectures = () => {
  const subjects = [
    "Mathematics",
    "Science",
    "Social Science",
    "English",
    "Hindi",
  ];
  const data = [
    {
      title: "Number System",
      lect_no: 1,
      sub: "Mathematics",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail4.jpg?updatedAt=1680883327422",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 07min",
    },
    {
      title: "Number System",
      lect_no: 2,
      sub: "Mathematics",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail3.jpeg?updatedAt=1680883327401",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 17min",
    },
    {
      title: "Number System",
      lect_no: 3,
      sub: "Mathematics",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail4.jpg?updatedAt=1680883327422",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 16min",
    },
    {
      title: "Number System",
      lect_no: 4,
      sub: "Mathematics",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail-2.png?updatedAt=1680883327389",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
    },
    {
      title: "Ratio and Percentage",
      lect_no: 1,
      sub: "Mathematics",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail1.png?updatedAt=1680883327401",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 47min",
    },
    {
      title: "Ratio and Percentage",
      lect_no: 2,
      sub: "Mathematics",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail1.png?updatedAt=1680883327401",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 13min",
    },
    {
      title: "Ratio and Percentage",
      lect_no: 3,
      sub: "Mathematics",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail1.png?updatedAt=1680883327401",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "2hr 07min",
    },
    {
      title: "Simple Interest",
      lect_no: 1,
      sub: "Mathematics",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail3.jpeg?updatedAt=1680883327401",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 03min",
    },
    {
      title: "Simple Interest",
      lect_no: 2,
      sub: "Mathematics",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail3.jpeg?updatedAt=1680883327401",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 07min",
    },
    {
      title: "Compound Interest",
      lect_no: 1,
      sub: "Mathematics",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail-2.png?updatedAt=1680883327389",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 17min",
    },
    {
      title: "Compound Interest",
      lect_no: 2,
      sub: "Mathematics",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail-2.png?updatedAt=1680883327389",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 29min",
    },
    {
      title: "Compound Interest",
      lect_no: 3,
      sub: "Mathematics",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail-2.png?updatedAt=1680883327389",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 32min",
    },
    {
      title: "Time and Work",
      lect_no: 1,
      sub: "Mathematics",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail4.jpg?updatedAt=1680883327422",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "2hr 29min",
    },
    {
      title: "Cell",
      lect_no: 1,
      sub: "Science",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail-2.png?updatedAt=1680883327389",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 01min",
    },
    {
      title: "Cell",
      lect_no: 2,
      sub: "Science",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail-2.png?updatedAt=1680883327389",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 37min",
    },
    {
      title: "Cell",
      lect_no: 3,
      sub: "Science",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail-2.png?updatedAt=1680883327389",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 05min",
    },
    {
      title: "Cell",
      lect_no: 4,
      sub: "Science",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail-2.png?updatedAt=1680883327389",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 07min",
    },
    {
      title: "Crop Production",
      lect_no: 1,
      sub: "Science",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail3.jpeg?updatedAt=1680883327401",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 07min",
    },
    {
      title: "Tense",
      lect_no: 1,
      sub: "English",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail3.jpeg?updatedAt=1680883327401",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 09min",
    },
    {
      title: "Tense",
      lect_no: 2,
      sub: "English",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail3.jpeg?updatedAt=1680883327401",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 11min",
    },
    {
      title: "Tense",
      lect_no: 3,
      sub: "English",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail3.jpeg?updatedAt=1680883327401",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 07min",
    },
  ];
  const [activeSub, setActiveSub] = useState(subjects[0]);
  const [chapters, setChapters] = useState([]);
  const [activeChapter, setActiveChapter] = useState();
  const [contents, setContents] = useState([]);
  //   const [activeContent, setActiveContent]= useState();
  const ftechChapters = (sub) => {
    let tmp = data.filter((item) => item.sub === sub && item.lect_no === 1);
    setChapters([...tmp]);
  };
  const fetchContents = (sub, chap) => {
    let tmp = data.filter((item) => item.sub === sub && item.title === chap);
    setContents([...tmp]);
  };
  useEffect(() => {
    ftechChapters(activeSub);

    // return () => {
    //   setChapters([]);
    // };
  }, []);
  const handleSubChange = (sub) => {
    setContents([]);
    setActiveSub(sub);
    ftechChapters(sub);
  };
  const handleChapChange = (chap) => {
    setActiveChapter(chap);
    fetchContents(activeSub, chap);
  };
  return (
    <div>
      <h2 className="text-lg md:text-3xl md:font-semibold m-3  py-10">
        Recorded Lectures
      </h2>
      <div className="flex w-full lg:h-[550px]">
        <div className="w-1/4 md:w-1/3 ps-2 md:ps-8">
          {subjects.map((sub) => (
            <p
              className={`text-center text-[10px] sm:text-sm md:text-lg leading-6 sm:leading-8 md:leading-10 my-6 sm:my-8 md:my-10  font-semibold hover:bg-slate-800 cursor-pointer ${
                activeSub === sub ? "text-red-500" : "text-slate-400"
              } rounded-s-lg`}
              key={sub}
              onClick={() => handleSubChange(sub)}
            >
              {sub}
            </p>
          ))}
        </div>
        <div className="w-1/4 md:w-1/3 bg-slate-800 py-5 rounded-s-lg">
          {chapters &&
            chapters.map((chapter, idx) => (
              <p
                key={chapter.title}
                className={`px-2 md:px-4 text-[8px] sm:text-xs md:text-lg leading-[10px] sm:leading-6 md:leading-8 my-4 md:my-6  font-semibold hover:bg-slate-800 cursor-pointer ${
                  activeChapter === chapter.title
                    ? "text-red-500"
                    : "text-slate-400"
                }`}
                onClick={() => handleChapChange(chapter.title)}
              >
                <span>{idx + 1}. </span>
                {chapter.title}
              </p>
            ))}
        </div>
        <div className="w-1/2 md:w-1/3 bg-slate-800">
          <div className="w-full h-1/2">
            {contents && contents[0] && (
              <LectCard
                sz="md"
                data={contents.filter((content) => content.lect_no === 1)[0]}
              />
            )}
          </div>
          <div className="flex relative top-4 h-1/3 pt-4">
            <div className="w-1/2 h-full">
              {contents && contents[1] && (
                <LectCard
                  sz="sm"
                  data={contents.filter((content) => content.lect_no === 2)[0]}
                />
              )}
            </div>
            <div className="w-1/2 h-full">
              {contents && contents[2] && (
                <LectCard
                  sz="sm"
                  data={contents.filter((content) => content.lect_no === 3)[0]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lectures;
