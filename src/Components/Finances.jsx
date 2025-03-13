import Frame2 from "/Frame2.png";

const Finances = () => {
  return (
    <div className="mx-30">
      {/* New Section with 3 Images */}
      <div className="w-full flex flex-col items-center justify-around md:mt-[11rem] py-14">
        <h2 className="text-3xl md:text-6xl font-bold flex flex-col text-center mb-6 py-2 tracking-tight">
          <span>Everything You Need to</span>
          <span className="text-[#121212] md:py-6 tracking-tighter">
            Manage Your <span className="text-[#cec0f0]">Finances</span>
          </span>
        </h2>

        {/* Image Below Heading */}
        <div className="w-full max-w-[1100px] h-auto md:h-full flex justify-center">
          <img
            src={Frame2}
            alt="Finances Overview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Finances;
