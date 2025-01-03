
import instructor1 from "../../assets/img/Users/user1.png";
import instructor2 from "../../assets/img/Users/user2.png";
import instructor3 from "../../assets/img/Users/user3.png";

const Instructor = () => {
  return (
    <>
      <div className="all bg-color4 pb-12">
        <div className="text pt-24 text-color1 text-center">
          <h2 className="font-semibold text-4xl">Instructors</h2>
          <p className="py-8">
            Continuing Professional Development At It's Finest!
          </p>
        </div>

        <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center mb-8 text-color1">
          

          {/* ================= Image card ================= */}
          <div className="relative flex flex-col items-center w-[388px] h-[586px] mb-8 md:mb-0">
            {/* Background Panel */}
            <div className="absolute inset-0 bg-white/5 rounded-[18px]"></div>

            {/* Image */}
            <img
              className="absolute inset-x-0 top-0 w-full md:h-[415px] rounded-tl-[18px] rounded-tr-[18px] object-cover"
              src={instructor1}
              alt="Profile"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#120c04]/100 via-[#120c04]/60 to-[#120c04]/10 rounded-[18px]"></div>

            {/* Content Section */}
            <div className="absolute top-[352px] flex flex-col w-[305px] h-[201.2px] justify-start items-center gap-[25px]">
              {/* Title */}
              <div className="text-center text-white/90 text-[28px] font-medium leading-7">
                Fiona Addington Bsc
              </div>

              {/* Education Section */}
              <div className="h-[148.2px] flex flex-col justify-start items-start gap-[13px]">
                <div className="text-white/60 text-base font-normal capitalize leading-7">
                  Education
                </div>

                {/* Education Details */}
                <div className="flex flex-col self-stretch h-[66.2px] gap-[11px]">
                  <div className="flex justify-start items-center gap-1.5">
                    <div className="px-5 py-[5.6px] bg-[#383116]/50 rounded-[99px] flex items-start">
                      <div className="text-[#c1b27d] text-xs font-normal leading-none">
                        BSc honours Degree in Psychology
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start items-end gap-1.5">
                    <div className="px-5 py-[5.6px] bg-[#383116]/50 rounded-[99px] flex items-start">
                      <div className="text-[#c1b27d] text-xs font-normal leading-none">
                        BL and ML combinCertified ...
                      </div>
                    </div>
                    <div className="text-center text-white/80 text-base font-normal capitalize leading-7">
                      +1 more
                    </div>
                  </div>
                </div>

                {/* View Profile */}
                <div className="flex justify-start items-center gap-[7px]">
                  <div className="text-white text-base font-medium capitalize leading-7">
                    View Profile
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ================= Image card ================= */}


          {/* ================= Image card ================= */}
          <div className="relative flex flex-col items-center w-[388px] h-[586px] mb-8 md:mb-0">
            {/* Background Panel */}
            <div className="absolute inset-0 bg-white/5 rounded-[18px]"></div>

            {/* Image */}
            <img
              className="absolute inset-x-0 top-0 w-full h-[415px] rounded-tl-[18px] rounded-tr-[18px] object-cover"
              src={instructor2}
              alt="Profile"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#120c04]/100 via-[#120c04]/60 to-[#120c04]/10 rounded-[18px]"></div>

            {/* Content Section */}
            <div className="absolute top-[352px] flex flex-col w-[305px] h-[201.2px] justify-start items-center gap-[25px]">
              {/* Title */}
              <div className="text-center text-white/90 text-[28px] font-medium leading-7">
                Fiona Addington Bsc
              </div>

              {/* Education Section */}
              <div className="h-[148.2px] flex flex-col justify-start items-start gap-[13px]">
                <div className="text-white/60 text-base font-normal capitalize leading-7">
                  Education
                </div>

                {/* Education Details */}
                <div className="flex flex-col self-stretch h-[66.2px] gap-[11px]">
                  <div className="flex justify-start items-center gap-1.5">
                    <div className="px-5 py-[5.6px] bg-[#383116]/50 rounded-[99px] flex items-start">
                      <div className="text-[#c1b27d] text-xs font-normal leading-none">
                        BSc honours Degree in Psychology
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start items-end gap-1.5">
                    <div className="px-5 py-[5.6px] bg-[#383116]/50 rounded-[99px] flex items-start">
                      <div className="text-[#c1b27d] text-xs font-normal leading-none">
                        BL and ML combinCertified ...
                      </div>
                    </div>
                    <div className="text-center text-white/80 text-base font-normal capitalize leading-7">
                      +1 more
                    </div>
                  </div>
                </div>

                {/* View Profile */}
                <div className="flex justify-start items-center gap-[7px]">
                  <div className="text-white text-base font-medium capitalize leading-7">
                    View Profile
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ================= Image card ================= */}


          {/* ================= Image card ================= */}
          <div className="relative flex flex-col items-center w-[388px] h-[586px] mb-8 md:mb-0">
            {/* Background Panel */}
            <div className="absolute inset-0 bg-white/5 rounded-[18px]"></div>

            {/* Image */}
            <img
              className="absolute inset-x-0 top-0 w-full h-[415px] rounded-tl-[18px] rounded-tr-[18px] object-cover"
              src={instructor3}
              alt="Profile"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#120c04]/100 via-[#120c04]/60 to-[#120c04]/10 rounded-[18px]"></div>

            {/* Content Section */}
            <div className="absolute top-[352px] flex flex-col w-[305px] h-[201.2px] justify-start items-center gap-[25px]">
              {/* Title */}
              <div className="text-center text-white/90 text-[28px] font-medium leading-7">
                Fiona Addington Bsc
              </div>

              {/* Education Section */}
              <div className="h-[148.2px] flex flex-col justify-start items-start gap-[13px]">
                <div className="text-white/60 text-base font-normal capitalize leading-7">
                  Education
                </div>

                {/* Education Details */}
                <div className="flex flex-col self-stretch h-[66.2px] gap-[11px]">
                  <div className="flex justify-start items-center gap-1.5">
                    <div className="px-5 py-[5.6px] bg-[#383116]/50 rounded-[99px] flex items-start">
                      <div className="text-[#c1b27d] text-xs font-normal leading-none">
                        BSc honours Degree in Psychology
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start items-end gap-1.5">
                    <div className="px-5 py-[5.6px] bg-[#383116]/50 rounded-[99px] flex items-start">
                      <div className="text-[#c1b27d] text-xs font-normal leading-none">
                        BL and ML combinCertified ...
                      </div>
                    </div>
                    <div className="text-center text-white/80 text-base font-normal capitalize leading-7">
                      +1 more
                    </div>
                  </div>
                </div>

                {/* View Profile */}
                <div className="flex justify-start items-center gap-[7px]">
                  <div className="text-white text-base font-medium capitalize leading-7">
                    View Profile
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ================= Image card ================= */}


        </div>
      </div>
    </>
  );
};

export default Instructor;
