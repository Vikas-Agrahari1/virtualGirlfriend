import React from "react";
import { Link } from "react-router-dom";
import newsList from "../data/newsData";

const IndustryNews = () => {
  // 4 cards right ke liye, aur 1 left ke liye
  const featuredNews = newsList[0];
  const rightSideNews = newsList.slice(1, 5);

  return (
    <section className="bg-white px-6 py-10 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold mb-2">Industry News</h2>
      <p className="text-gray-600 mb-6 max-w-xl">
        Read how today’s innovators are using Art and Design to create a
        better, brighter world.
      </p>

      {/* Desktop view */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {/* Left Featured */}
        <div className="md:col-span-2 relative group h-80">
          <Link to={featuredNews.link}>
            <img
              src={featuredNews.image}
              alt="Featured"
              className="w-full h-90 object-cover rounded-xl shadow group-hover:opacity-90 transition"
            />
            <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold bg-black bg-opacity-60 p-2 rounded-md max-w-md">
              {featuredNews.title}
            </h3>
          </Link>
        </div>

        {/* Right side cards */}
        <div className="flex flex-col gap-4">
          {rightSideNews.map((news, index) => (
            <Link to={news.link} key={index}>
              <div className="flex gap-4 items-center hover:bg-gray-100 p-2 rounded-md transition">
                <img
                  src={news.image}
                  alt="news-thumb"
                  className="w-20 h-16 object-cover rounded-md"
                />
                <p className="text-sm font-medium text-gray-800">{news.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile horizontal scroll view */}
      <div className="md:hidden flex overflow-x-auto gap-4 mt-6 pb-4 scrollbar-hide">
        {newsList.map((news, index) => (
          <Link
            to={news.link}
            key={index}
            className="min-w-[250px] max-w-[250px] bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img
              src={news.image}
              alt="news"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-3">
              <p className="text-sm font-semibold text-gray-800">{news.title}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link to="/news">
          <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
            VIEW ALL NEWS
          </button>
        </Link>
      </div>
    </section>
  );
};

export default IndustryNews;
