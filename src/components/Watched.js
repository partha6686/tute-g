import LectCard from "./LectCard";

const Watched = ({ data }) => {
  return (
    <div>
      <h2 className="text-lg md:text-3xl md:font-semibold mx-3 py-10">
        Last Watched Lectures
      </h2>
      <div className="flex flex-col sm:flex-row w-full ">
        <div className="w-full sm:w-2/3 h-[55vw] sm:h-[35vw] mb-8">
          <LectCard sz="md" data={data[0]} bar="2/3" />
        </div>
        <div className="flex flex-row sm:flex-col w-full sm:w-1/3 pt-4  pe-3">
          <div className="h-[30vw] sm:h-[14vw] md:h-[14vw] lg:h-[15vw] w-1/2 sm:w-full mb-9">
            <LectCard sz="sm" data={data[1]} bar="1/3" />
          </div>
          <div className="h-[30vw] sm:h-[14vw] md:h-[14vw] lg:h-[16vw] w-1/2 sm:w-full">
            <LectCard sz="sm" data={data[2]} bar="full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watched;
