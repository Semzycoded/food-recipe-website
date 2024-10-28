const Banner = ({children}) => {
  return (
    <div className={`bg-gray-700 h-[360px] w-full font-bold text-white text-[40px] flex justify-center items-center text-center bg-[url(/banner.jpg)] bg-no-repeat bg-cover bg-center`}>
      {children}
    </div>
  );
};

export default Banner;
