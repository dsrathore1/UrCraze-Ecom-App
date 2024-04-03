export default function Banner() {
  return (
    <>
      <div className="h-[40vh] relative flex justify-start items-center">
        <div className="bg-red-400 ml-10 text-center">
          <h1 className="text-[13rem] top-0 font-black opacity-20 uppercase absolute z-0">
            Black
          </h1>
          <h2 className="text-[5rem] absolute uppercase z-10 top-28 font-semibold left-[8rem] opacity-40">
            Friday <span className="text-amber">deals</span>
          </h2>
        </div>
      </div>
    </>
  );
}
