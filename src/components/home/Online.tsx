import React from "react";

import Team from "../../assets/img/teamflow.png";

const Online = () => {
  return (
    <>
      <div className="start bg-color9 py-20">
        <div className="box_1">
          {/* ====== Big Screen Design ====== */}
          <div className="hidden md:block div1 h-auto w-auto md:bg-onlineexam2 bg-no-repeat bg-cover bg-right pl-32 flex flex-col justify-start text-color1">
            <div className="box_ontent w-9/12 py-12">
              <button className="btn-secondary w-48 -mt-10">
                Online Exams!
              </button>
              <h1 className="text-4xl font-semibold mt-8 w-[60%]">
                State of the art examination software to show the highest
                integrity!
              </h1>
              <p className="mt-8 text-red-400 font-medium text-lg text-[#858483] w-[60%]">
                Flexible exams that can be sat anytime 24/7. CIFA uses
                state-of-the-art examination software which enables students to
                sit exams at any time from the comfort of their own home,
                without any time restrictions. <br /> <br />
                CIFA facial recognition examinations enable the verification of
                a CIFA student's identity without the need to be present in a
                physical test centre giving CIFA students complete flexibility.
              </p>
              <button className="px-3 py-1 sm:px-6 w-44 sm:py-2 border-2 border-color2 bg-color3 text-lg font-medium rounded-lg mt-12">
                Online Exams!
              </button>
            </div>
          </div>
          {/* ====== Big Screen Design End ====== */}

          {/* ====== Small Screen Design ====== */}
          <div className="bgi md:hidden h-[600px] bg-onlineexam bg-no-repeat bg-cover"></div>
          <div className="block md:hidden content flex flex-col justify-center items-center text-color1 -mt-20">
            <button className="btn-secondary w-48 -mt-10">Online Exams!</button>
            <h1 className="text-4xl font-semibold text-center px-8 mt-8">
              State of the art examination software to show the highest
              integrity!
            </h1>
            <p className="px-10 mt-8 text-red-400 text-center font-medium text-lg text-[#858483]">
              Flexible exams that can be sat anytime 24/7. CIFA uses
              state-of-the-art examination software which enables students to
              sit exams at any time from the comfort of their own home, without
              any time restrictions. <br /> <br />
              CIFA facial recognition examinations enable the verification of a
              CIFA student's identity without the need to be present in a
              physical test centre giving CIFA students complete flexibility.
            </p>
            <button className="px-3 py-1 sm:px-6 sm:py-2 border-2 border-color2 bg-color3 text-lg font-medium rounded-lg mt-12">
              Online Exams!
            </button>
          </div>
          {/* ====== Small Screen Design End ====== */}
        </div>

{/* ====== Shared Content ====== */}
<div className="box-2 mx-8 lg:mx-32 text-color1 ">
  <div className="content h-auto w-full bg-[#0a0906] border-2 border-[#2f2b1e] mt-20 rounded-2xl lg:flex lg:items-center lg:h-auto">
    {/* Left Section */}
    <div className="left lg:w-[50%] lg:h-full flex flex-col justify-center px-8">
      <h1 className="text-4xl font-semibold text-center pt-14 lg:text-left">
        Innovative Corporate Training Solutions.
      </h1>
      <p className="mt-8 text-red-400 text-center lg:text-left font-medium text-lg text-[#858483]">
        Develop the skills that your workforce needs with CIFA’S corporate
        training packages. CIFA has innovative features and functions that
        enable corporations to monitor and track their employees' continuing
        professional development progress in real time. <br /> <br />
        The professional workplace is evolving with the ever-increasing need
        for upskilling. CIFA has the corporate training solutions to meet your
        companies’ needs.
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
        className="p-4 md:px-28 lg:p-6 lg:h-auto lg:w-auto lg:m-4 lg:max-h-[480px] pb-12 object-contain"
        src={Team}
        alt="team"
      />
    </div>
  </div>
</div>
{/* ====== Shared Content End ====== */}

      </div>
    </>
  );
};

export default Online;
