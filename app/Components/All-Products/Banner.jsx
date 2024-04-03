export default function Banner() {
  return (
    <>
      <div className="h-[60vh] relative flex justify-start items-center">
        <div className="bg-red-400 ml-10 text-center">
          <h1 className="text-[13rem] top-0 font-black opacity-20 uppercase absolute z-0">
            Black
          </h1>
          <h2 className="text-[5rem] absolute uppercase z-10 top-28 font-semibold left-[8rem] opacity-40">
            Friday <span className="text-amber">deals</span>
          </h2>
        </div>
        <div className="relative h-full w-full">
          <div className="absolute bottom-0 right-20">
            <h1 className="text-5xl uppercase text-amber font-bold">
              Hours Left
            </h1>
            <h1 className="text-[7rem] text-purple-600 font-black -mt-8">
              10:22
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
