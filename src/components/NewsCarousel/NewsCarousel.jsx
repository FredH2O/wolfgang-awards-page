import insight from "../../data/insights";
import NewsCard from "./NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../NewsCarousel/NewsCarousel.css";
import { MoveRight, MoveLeft } from "lucide-react";
import { useState } from "react";

function NewsCarousel() {
  const [filter, setFilter] = useState("blog");

  const filteredPosts = insight.filter((post) => post.type === filter);

  return (
    <section className="bg-slate-50 py-10 lg:py-20 -mx-3 md:-mx-4 lg:-mx-5 xl:-mx-25 px-3 md:px-4 lg:px-5 xl:px-25">
      <p className="text-xs uppercase font-semibold pb-5">• Insights</p>
      <div className="flex flex-wrap items-end gap-3 md:gap-5 pb-8 lg:pb-14 justify-between">
        <h2 className="uppercase lg:text-6xl md:text-4xl text-2xl font-bold text-emerald-900">
          Latest News & Insights
        </h2>
        <div className="flex gap-5">
          <div className="flex items-center text-md font-medium gap-4">
            <p>Filter by</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilter("blog")}
                className={`border px-3 py-2 rounded-full font-bold cursor-pointer hover:bg-green-900 hover:text-white text-green-900 transition-all ease-in-out duration-300 ${filter === "blog" ? "bg-green-900 text-white" : "text-black"}`}
              >
                Blogs
              </button>
              <button
                onClick={() => setFilter("news")}
                className={`border px-3 py-2 rounded-full font-bold cursor-pointer hover:bg-green-900 hover:text-white text-green-900 transition-all ease-in-out duration-300 ${filter === "news" ? "bg-green-900 text-white" : "text-black"}`}
              >
                News
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel here */}
      <div>
        <Swiper
          className=""
          modules={[Pagination, Navigation]}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {filteredPosts.map((post) => (
            <SwiperSlide key={post.id}>
              <NewsCard post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-col md:flex-row gap-3 px-20 items-center justify-between mt-8">
          {/* LEFT: View All */}
          <button className="text-md whitespace-nowrap font-bold rounded-full border px-4 py-2 cursor-pointer hover:bg-emerald-900 hover:text-white transition-all ease-in duration-150">
            View All Blogs
          </button>

          {/* MIDDLE: pagination dots */}
          <div className="flex custom-pagination gap-1 justify-center" />

          {/* RIGHT: arrows */}
          <div className="flex items-center gap-3 p-1">
            <button className="group custom-prev cursor-pointer transition-all duration-150 ease-in hover:bg-emerald-900 rounded-full border p-2">
              <MoveLeft
                className="group-hover:text-white transition-all duration-150 ease-in"
                size={20}
              />
            </button>
            <button className="group cursor-pointer transition-all duration-150 ease-in hover:bg-emerald-900 custom-next rounded-full border p-2">
              <MoveRight
                className="group-hover:text-white transition-all duration-150 ease-in"
                size={20}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsCarousel;
