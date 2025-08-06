import React from "react";
import newsList from "../data/newsData";
import { Link } from "react-router-dom";

const AllNews = () => {
  return (
    <div className="px-6 py-10 md:px-16 lg:px-24 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All News Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsList.map((news, index) => (
          <Link to={news.link} key={index}>
            <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{news.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
