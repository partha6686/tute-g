import LectCard from "./LectCard";

const Watched = () => {
  const data = [
    {
      title: "Number System",
      lect_no: 3,
      sub: "Mathematics",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail4.jpg?updatedAt=1680883327422",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 07min",
    },
    {
      title: "Cell",
      lect_no: 2,
      sub: "Science",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail-2.png?updatedAt=1680883327389",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 27min",
    },
    {
      title: "Simple Interest",
      lect_no: 1,
      sub: "Mathematics",
      imgsrc:
        "https://ik.imagekit.io/v9pfmptul/ansrOne/thumbnail3.jpeg?updatedAt=1680883327401",
      link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
      time: "1hr 18min",
    },
  ];
  return (
    <div>
      <h2 className="text-lg md:text-3xl md:font-semibold mx-3 py-10">
        Last Watched Lectures
      </h2>
      <div className="flex w-full lg:h-[550px]">
        <div className="w-2/3 h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px]">
          <LectCard sz="md" data={data[0]} />
        </div>
        <div className="w-1/3 py-4 pe-3">
          <div className="h-[42%] mb-9">
            <LectCard sz="sm" data={data[1]} />
          </div>
          <div className="h-[42%]">
            <LectCard sz="sm" data={data[2]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watched;
