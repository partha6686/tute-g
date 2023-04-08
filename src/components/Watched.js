import LectCard from "./LectCard";

const Watched = ({ data }) => {
  return (
    <div>
      <h2 className="text-lg md:text-3xl md:font-semibold mx-3 py-10">
        Last Watched Lectures
      </h2>
      <div className="flex w-full lg:h-[550px]">
        <div className="w-2/3 h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px]">
          <LectCard sz="md" data={data[0]} bar="2/3" />
        </div>
        <div className="w-1/3 py-4 pe-3">
          <div className="h-[42%] mb-9">
            <LectCard sz="sm" data={data[1]} bar="1/3" />
          </div>
          <div className="h-[42%]">
            <LectCard sz="sm" data={data[2]} bar="full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watched;
