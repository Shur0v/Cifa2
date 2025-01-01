import React from "react";
import Team from "../../assets/img/cifa.png";

const Cifa = () => {
  return (
    <>
      <div className="start bg-color9 py-20">
        <div className="box-2 mx-8 lg:mx-32 text-color1 ">
          <div className="content h-auto w-full bg-[#0a0906] border-2 border-[#2f2b1e] mt-20 rounded-2xl lg:flex lg:items-center lg:h-auto">
            {/* Left Section */}
            <div className="left lg:w-[50%] lg:h-full flex flex-col justify-center px-8">
              <h1 className="text-4xl font-semibold text-center pt-14 lg:text-left">
                Innovative Corporate Training Solutions.
              </h1>
              <p className="mt-8 text-red-400 text-center lg:text-left font-medium text-lg text-[#858483]">
                Develop the skills that your workforce needs with CIFA’S
                corporate training packages. CIFA has innovative features and
                functions that enable corporations to monitor and track their
                employees' continuing professional development progress in real
                time. <br /> <br />
                The professional workplace is evolving with the ever-increasing
                need for upskilling. CIFA has the corporate training solutions
                to meet your companies’ needs.
              </p>
              <div className="btn flex justify-center lg:justify-start pb-10">
                <button className="px-3 py-1 sm:px-6 sm:py-2 border-2 border-color2 bg-color3 text-lg font-medium rounded-lg mt-12">
                  Online Exams!
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="right lg:w-[50%] lg:h-full flex justify-end items-center">
              <img
                className="py-8 px-6 md:py-28 lg:p-6 lg:h-auto lg:w-auto lg:m-4 lg:max-h-[480px] pb-12 object-contain "
                src={Team}
                alt="team"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cifa;
