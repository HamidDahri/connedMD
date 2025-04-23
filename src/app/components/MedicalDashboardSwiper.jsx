"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const MedicalDashboardSwiper = ({ dashboardViews = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Default views if none provided
  const defaultViews = [
    {
      id: "condition-history",
      title: "Condition History",
      imagePath: "/images/condition-history.jpg",
      thumbnailPath: "/images/condition-history-thumb.jpg", // Separate thumbnail image
    },
  ];

  const views = dashboardViews.length > 0 ? dashboardViews : defaultViews;

  return (
    <div className="w-full select-none medical-dashboard-container">
      {/* Main Swiper */}
      <div className="mb-4 main-swiper-container">
        <Swiper
          modules={[Navigation, Pagination, Thumbs]}
          navigation={true}
          pagination={false}
          thumbs={{ swiper: thumbsSwiper }}
          loop={false}
          className=""
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {views.map((view) => (
            <SwiperSlide key={view.id} className="bg-white ">
              <div className="relative grid grid-cols-12 ">
                {view.imagePath ? (
                  <div className="col-span-10 col-start-2">
                    <div className="w-full h-full">
                      <Image
                        className="!relative w-full h-full"
                        src={view.imagePath}
                        alt={view.title}
                        width={500}
                        height={500}
                        priority={true}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full h-full">
                    {view.component ? (
                      view.component
                    ) : (
                      <p className="text-lg text-gray-500">
                        {view.title} Content
                      </p>
                    )}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Swiper */}
      <div className="hidden max-w-5xl mx-auto md:block thumbnail-swiper-container">
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          watchSlidesProgress={true}
          slidesPerView={4}
          spaceBetween={10}
          className="thumbnail-swiper centerThumbNails"
        >
          {views.map((view, index) => (
            <SwiperSlide
              key={`thumb-${view.id}`}
              className="grid items-center justify-center grid-cols-12 !mr-0 cursor-pointer"
            >
              <div
                className={`!shadow-none ${
                  activeIndex === index
                    ? " border-green-500 bg-red-100 overflow-hidden w-full"
                    : " opacity-50"
                } rounded-md overflow-hidden p-2 transition-all duration-300`}
              >
                {view.thumbnailPath || view.imagePath ? (
                  // <div className="relative w-full h-full aspect-[4/3]">
                  <div className="w-full h-full">
                    <Image
                      src={view.thumbnailPath || view.imagePath}
                      alt={`${view.title} thumbnail`}
                      width={400}
                      height={400}
                      className="!relative h-full w-full"
                    />
                  </div>
                ) : (
                  // </div>
                  <div
                    className={`w-full aspect-[4/3] flex items-center justify-center ${
                      activeIndex === index ? "bg-red-50" : "bg-gray-100"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        activeIndex === index
                          ? "text-red-600 font-medium"
                          : "text-gray-600"
                      } text-center`}
                    >
                      {view.title}
                    </p>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MedicalDashboardSwiper;
