import React, { use, useEffect, useState } from "react";
import LectCard from "./LectCard";

const Lectures = ({ initdata }) => {
  const subjects = [
    "Mathematics",
    "Science",
    "Social Science",
    "English",
    "Hindi",
  ];
  const [data, setData] = useState(initdata);
  const [activeSub, setActiveSub] = useState(subjects[0]);
  const [chapters, setChapters] = useState([]);
  const [activeChapter, setActiveChapter] = useState();
  const [contents, setContents] = useState([]);
  //   const [activeContent, setActiveContent]= useState();
  const ftechChapters = async (sub) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}getlectures/${sub}`
    );
    let df = await response.json();
    setData(df);
    let tmp = df.filter((item) => item.lect_no === 1);
    setChapters([...tmp]);
  };
  const fetchContents = (chap) => {
    let tmp = data.filter((item) => item.title === chap);
    setContents([...tmp]);
  };
  useEffect(() => {
    let tmp = initdata.filter((item) => item.lect_no === 1);
    setChapters([...tmp]);
    setActiveChapter(tmp[0].title);
    fetchContents(tmp[0].title);
  }, []);

  const handleSubChange = (sub) => {
    setContents([]);
    setActiveSub(sub);
    ftechChapters(sub);
  };
  const handleChapChange = (chap) => {
    setActiveChapter(chap);
    fetchContents(chap);
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
          <div className="h-full overflow-y-scroll">
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
