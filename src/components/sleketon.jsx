const Skeleton = () => {
  return (
    <div className="flex flex-col  rounded-[33px] w-[403px] h-[473px] overflow-hidden">
      <div className="w-full  h-[212px] skeleton rounded-none"></div>

      <div className="flex flex-col items-start w-full gap-10 p-3">
        <div className="flex flex-col gap-[18px] w-full">
          <div className="h-[45px] skeleton w-[70%] rounded-sm"></div>
          <div className="w-full h-4 skeleton"></div>
          <div className="w-full h-4 skeleton"></div>
          <div className="w-full h-4 skeleton"></div>
        </div>

        <div className="h-[45px] skeleton w-[156px] rounded-[32px]"></div>
      </div>
    </div>
  );
};

export default Skeleton;