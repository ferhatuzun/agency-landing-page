// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";

// import required modules
import { Pagination } from "swiper/modules";
import CustomButton from "./ui/CustomButton";

export default function HeaderSlider() {
  return (
    <div className="bg-bg pb-10 font-inter">
      <div className="container mx-auto py-8 md:py-20">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col gap-y-10 lg:flex-row justify-center items-center gap-x-52 px-10">
              <div className="flex flex-col gap-y-8">
                <div className="text-6xl font-bold">
                  <h2 className="text-text-main ">Lesson and insights</h2>
                  <h2 className="text-green">from 8 years</h2>
                </div>
                <p>
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <CustomButton size="lg" href="#" color="colored">
                  Register
                </CustomButton>
              </div>
              <div>
                <img
                  src="/images/Illustration.png"
                  alt=""
                  className="w-[500px]"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-y-10 lg:flex-row justify-center items-center gap-x-52 px-10">
              <div className="flex flex-col gap-y-8">
                <div className="text-6xl font-bold">
                  <h2 className="text-text-main ">Lesson and insights</h2>
                  <h2 className="text-green">from 8 years</h2>
                </div>
                <p>
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <CustomButton size="lg" href="#" color="colored">
                  Register
                </CustomButton>
              </div>
              <div>
                <img
                  src="/images/Illustration.png"
                  alt=""
                  className="w-[500px]"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-y-10 lg:flex-row justify-center items-center gap-x-52 px-10">
              <div className="flex flex-col gap-y-8">
                <div className="text-6xl font-bold">
                  <h2 className="text-text-main ">Lesson and insights</h2>
                  <h2 className="text-green">from 8 years</h2>
                </div>
                <p>
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <CustomButton size="lg" href="#" color="colored">
                  Register
                </CustomButton>
              </div>
              <div>
                <img
                  src="/images/Illustration.png"
                  alt=""
                  className="w-[500px]"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
