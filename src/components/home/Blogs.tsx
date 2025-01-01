import React from "react";

import blog1 from "../../assets/img/blog/blog1.png";
import blog2 from "../../assets/img/blog/blog2.png";
import blog3 from "../../assets/img/blog/blog3.png";

const Blogs = () => {
  return (
    <>
      <div className="start bg-color4">
        <div className="top_content text-color8 text-center p-12">
          <h1 className="text-5xl text-[#ded9c9] font-semibold">Our Blogs</h1>
          <p className="font-medium text-lg pt-7 text-[#a9a49b] ">
            Checkout Our Latest Blogs Here
          </p>
        </div>

        <div className="User_box w-[85%] mx-auto text-color8 grid grid-cols-1 md:grid-cols-3 place-items-center">
          {/* ==============item 1============== */}
          <div className="w-[331.62px] h-[384.82px] flex-col justify-start items-start gap-[20.51px] inline-flex my-6">
            {/* Image Section */}
            <img
              className="self-stretch h-[271.79px] rounded-[14px] border-2 border-[#c1b27d]/20"
              src={blog1}
              alt="Placeholder"
            />

            {/* Text and Information Section */}
            <div className="self-stretch h-[92.51px] flex-col justify-start items-start gap-[10.26px] flex">
              {/* Title and Date */}
              <div className="self-stretch justify-between items-center gap-[44.44px] inline-flex">
                <div className="text-center text-white/90 text-sm leading-tight font-medium">
                  Investment Advisor Certificate
                </div>
                <div className="text-white/60 text-sm capitalize leading-normal font-medium text-[#a4a19d]">
                  24/11/2024
                </div>
              </div>

              {/* Related Tags */}
              <div className="self-stretch justify-start items-start gap-[20.51px] inline-flex">
                <div className="text-white/60 text-sm capitalize leading-normal text-[#a4a19d]">
                  related to:
                </div>
                <div className="grow h-[23.57px] justify-start items-start gap-[10.26px] flex">
                  {/* Course Tag */}
                  <div className="px-[17.09px] py-[4.79px] bg-[#383116]/50 rounded-[84.62px] border border-[#f8f6fe]/20 flex">
                    <div className="text-[#c1b27d] text-[10.26px] capitalize leading-[13.68px]">
                      courses
                    </div>
                  </div>
                  {/* News Tag */}
                  <div className="px-[17.09px] py-[4.79px] bg-[#383116]/50 rounded-[84.62px] border border-[#f8f6fe]/20 flex">
                    <div className="text-[#c1b27d] text-[10.26px] capitalize leading-[13.68px]">
                      News
                    </div>
                  </div>
                </div>
              </div>

              {/* Read More Section */}
              <div className="justify-start items-center gap-1.5 inline-flex">
                <div className="text-[#c1b27d] text-sm capitalize leading-normal">
                  read more
                </div>
              </div>
            </div>
          </div>
          {/* ==============item 1============== */}
          {/* ==============item 2============== */}
          <div className="w-[331.62px] h-[384.82px] flex-col justify-start items-start gap-[20.51px] inline-flex my-6">
            {/* Image Section */}
            <img
              className="self-stretch h-[271.79px] rounded-[14px] border-2 border-[#c1b27d]/20"
              src={blog2}
              alt="Placeholder"
            />

            {/* Text and Information Section */}
            <div className="self-stretch h-[92.51px] flex-col justify-start items-start gap-[10.26px] flex">
              {/* Title and Date */}
              <div className="self-stretch justify-between items-center gap-[44.44px] inline-flex">
                <div className="text-center text-white/90 text-sm leading-tight font-medium">
                  Advisor Certificate Units
                </div>
                <div className="text-white/60 text-sm capitalize leading-normal font-medium text-[#a4a19d]">
                  24/11/2024
                </div>
              </div>

              {/* Related Tags */}
              <div className="self-stretch justify-start items-start gap-[20.51px] inline-flex">
                <div className="text-white/60 text-sm capitalize leading-normal text-[#a4a19d]">
                  related to:
                </div>
                <div className="grow h-[23.57px] justify-start items-start gap-[10.26px] flex">
                  {/* Course Tag */}
                  <div className="px-[17.09px] py-[4.79px] bg-[#383116]/50 rounded-[84.62px] border border-[#f8f6fe]/20 flex">
                    <div className="text-[#c1b27d] text-[10.26px] capitalize leading-[13.68px]">
                      courses
                    </div>
                  </div>
                  {/* News Tag */}
                  <div className="px-[17.09px] py-[4.79px] bg-[#383116]/50 rounded-[84.62px] border border-[#f8f6fe]/20 flex">
                    <div className="text-[#c1b27d] text-[10.26px] capitalize leading-[13.68px]">
                      News
                    </div>
                  </div>
                </div>
              </div>

              {/* Read More Section */}
              <div className="justify-start items-center gap-1.5 inline-flex">
                <div className="text-[#c1b27d] text-sm capitalize leading-normal">
                  read more
                </div>
              </div>
            </div>
          </div>
          {/* ==============item 2============== */}
          {/* ==============item 3============== */}
          <div className="w-[331.62px] h-[384.82px] flex-col justify-start items-start gap-[20.51px] inline-flex my-6">
            {/* Image Section */}
            <img
              className="self-stretch h-[271.79px] rounded-[14px] border-2 border-[#c1b27d]/20"
              src={blog3}
              alt="Placeholder"
            />

            {/* Text and Information Section */}
            <div className="self-stretch h-[92.51px] flex-col justify-start items-start gap-[10.26px] flex">
              {/* Title and Date */}
              <div className="self-stretch justify-between items-center gap-[44.44px] inline-flex">
                <div className="text-center text-white/90 text-sm leading-tight font-medium">
                  iac cifa
                </div>
                <div className="text-white/60 text-sm capitalize leading-normal font-medium text-[#a4a19d]">
                  24/11/2024
                </div>
              </div>

              {/* Related Tags */}
              <div className="self-stretch justify-start items-start gap-[20.51px] inline-flex">
                <div className="text-white/60 text-sm capitalize leading-normal text-[#a4a19d]">
                  related to:
                </div>
                <div className="grow h-[23.57px] justify-start items-start gap-[10.26px] flex">
                  {/* Course Tag */}
                  <div className="px-[17.09px] py-[4.79px] bg-[#383116]/50 rounded-[84.62px] border border-[#f8f6fe]/20 flex">
                    <div className="text-[#c1b27d] text-[10.26px] capitalize leading-[13.68px]">
                      courses
                    </div>
                  </div>
                  {/* News Tag */}
                  <div className="px-[17.09px] py-[4.79px] bg-[#383116]/50 rounded-[84.62px] border border-[#f8f6fe]/20 flex">
                    <div className="text-[#c1b27d] text-[10.26px] capitalize leading-[13.68px]">
                      News
                    </div>
                  </div>
                </div>
              </div>

              {/* Read More Section */}
              <div className="justify-start items-center gap-1.5 inline-flex">
                <div className="text-[#c1b27d] text-sm capitalize leading-normal">
                  read more
                </div>
              </div>
            </div>
          </div>
          {/* ==============item 3============== */}
          {/* ==============item 4============== */}
          <div className="w-[331.62px] h-[384.82px] flex-col justify-start items-start gap-[20.51px] inline-flex my-6">
            {/* Image Section */}
            <img
              className="self-stretch h-[271.79px] rounded-[14px] border-2 border-[#c1b27d]/20"
              src={blog1}
              alt="Placeholder"
            />

            {/* Text and Information Section */}
            <div className="self-stretch h-[92.51px] flex-col justify-start items-start gap-[10.26px] flex">
              {/* Title and Date */}
              <div className="self-stretch justify-between items-center gap-[44.44px] inline-flex">
                <div className="text-center text-white/90 text-sm leading-tight font-medium">
                  Investment Advisor Certificate
                </div>
                <div className="text-white/60 text-sm capitalize leading-normal font-medium text-[#a4a19d]">
                  24/11/2024
                </div>
              </div>

              {/* Related Tags */}
              <div className="self-stretch justify-start items-start gap-[20.51px] inline-flex">
                <div className="text-white/60 text-sm capitalize leading-normal text-[#a4a19d]">
                  related to:
                </div>
                <div className="grow h-[23.57px] justify-start items-start gap-[10.26px] flex">
                  {/* Course Tag */}
                  <div className="px-[17.09px] py-[4.79px] bg-[#383116]/50 rounded-[84.62px] border border-[#f8f6fe]/20 flex">
                    <div className="text-[#c1b27d] text-[10.26px] capitalize leading-[13.68px]">
                      courses
                    </div>
                  </div>
                  {/* News Tag */}
                  <div className="px-[17.09px] py-[4.79px] bg-[#383116]/50 rounded-[84.62px] border border-[#f8f6fe]/20 flex">
                    <div className="text-[#c1b27d] text-[10.26px] capitalize leading-[13.68px]">
                      News
                    </div>
                  </div>
                </div>
              </div>

              {/* Read More Section */}
              <div className="justify-start items-center gap-1.5 inline-flex">
                <div className="text-[#c1b27d] text-sm capitalize leading-normal">
                  read more
                </div>
              </div>
            </div>
          </div>
          {/* ==============item 4============== */}
          {/* ==============item 5============== */}
          <div className="w-[331.62px] h-[384.82px] flex-col justify-start items-start gap-[20.51px] inline-flex my-6">
            {/* Image Section */}
            <img
              className="self-stretch h-[271.79px] rounded-[14px] border-2 border-[#c1b27d]/20"
              src={blog2}
              alt="Placeholder"
            />

            {/* Text and Information Section */}
            <div className="self-stretch h-[92.51px] flex-col justify-start items-start gap-[10.26px] flex">
              {/* Title and Date */}
              <div className="self-stretch justify-between items-center gap-[44.44px] inline-flex">
                <div className="text-center text-white/90 text-sm leading-tight font-medium">
                  Advisor Certificate Units
                </div>
                <div className="text-white/60 text-sm capitalize leading-normal font-medium text-[#a4a19d]">
                  24/11/2024
                </div>
              </div>

              {/* Related Tags */}
              <div className="self-stretch justify-start items-start gap-[20.51px] inline-flex">
                <div className="text-white/60 text-sm capitalize leading-normal text-[#a4a19d]">
                  related to:
                </div>
                <div className="grow h-[23.57px] justify-start items-start gap-[10.26px] flex">
                  {/* Course Tag */}
                  <div className="px-[17.09px] py-[4.79px] bg-[#383116]/50 rounded-[84.62px] border border-[#f8f6fe]/20 flex">
                    <div className="text-[#c1b27d] text-[10.26px] capitalize leading-[13.68px]">
                      courses
                    </div>
                  </div>
                  {/* News Tag */}
                  <div className="px-[17.09px] py-[4.79px] bg-[#383116]/50 rounded-[84.62px] border border-[#f8f6fe]/20 flex">
                    <div className="text-[#c1b27d] text-[10.26px] capitalize leading-[13.68px]">
                      News
                    </div>
                  </div>
                </div>
              </div>

              {/* Read More Section */}
              <div className="justify-start items-center gap-1.5 inline-flex">
                <div className="text-[#c1b27d] text-sm capitalize leading-normal">
                  read more
                </div>
              </div>
            </div>
          </div>
          {/* ==============item 5============== */}
          {/* ==============item 6============== */}
          <div className="w-[331.62px] h-[384.82px] flex-col justify-start items-start gap-[20.51px] inline-flex my-6">
            {/* Image Section */}
            <img
              className="self-stretch h-[271.79px] rounded-[14px] border-2 border-[#c1b27d]/20"
              src={blog3}
              alt="Placeholder"
            />

            {/* Text and Information Section */}
            <div className="self-stretch h-[92.51px] flex-col justify-start items-start gap-[10.26px] flex">
              {/* Title and Date */}
              <div className="self-stretch justify-between items-center gap-[44.44px] inline-flex">
                <div className="text-center text-white/90 text-sm leading-tight font-medium">
                  iac cifa
                </div>
                <div className="text-white/60 text-sm capitalize leading-normal font-medium text-[#a4a19d]">
                  24/11/2024
                </div>
              </div>

              {/* Related Tags */}
              <div className="self-stretch justify-start items-start gap-[20.51px] inline-flex">
                <div className="text-white/60 text-sm capitalize leading-normal text-[#a4a19d]">
                  related to:
                </div>
                <div className="grow h-[23.57px] justify-start items-start gap-[10.26px] flex">
                  {/* Course Tag */}
                  <div className="px-[17.09px] py-[4.79px] bg-[#383116]/50 rounded-[84.62px] border border-[#f8f6fe]/20 flex">
                    <div className="text-[#c1b27d] text-[10.26px] capitalize leading-[13.68px]">
                      courses
                    </div>
                  </div>
                  {/* News Tag */}
                  <div className="px-[17.09px] py-[4.79px] bg-[#383116]/50 rounded-[84.62px] border border-[#f8f6fe]/20 flex">
                    <div className="text-[#c1b27d] text-[10.26px] capitalize leading-[13.68px]">
                      News
                    </div>
                  </div>
                </div>
              </div>

              {/* Read More Section */}
              <div className="justify-start items-center gap-1.5 inline-flex">
                <div className="text-[#c1b27d] text-sm capitalize leading-normal">
                  read more
                </div>
              </div>
            </div>
          </div>
          {/* ==============item 6============== */}
          <div className="btn w-full md:col-span-3 flex justify-center">
            <button className="px-3 py-1 my-12 sm:px-6 sm:py-2 border-2 border-color2 bg-color3 text-lg font-medium rounded-lg mt-12">
              Online Exams!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
