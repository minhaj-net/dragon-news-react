import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  console.log(news);
  const { title,image_url,details ,category_id} = news;
  return (
    <div className=" mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      {/* Image Section */}
      <figure>
        <img
          src={image_url}
          alt="News thumbnail"
          className="w-full h-48 object-cover"
        />
      </figure>

      {/* Text Section */}
      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
        {details}.
        </p>

        {/* Button Section */}
        <div className="mt-5">
          <Link to={`/cetegory/${category_id}`} className="btn btn-outline btn-secondary  items-center gap-2 text-sm font-medium">
            <FaArrowLeft /> All news in this category
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
