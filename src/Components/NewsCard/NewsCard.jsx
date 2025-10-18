import { CiShare2 } from "react-icons/ci";
import { FaStar, FaEye } from "react-icons/fa";
import { IoBookmarkSharp } from "react-icons/io5";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details } = news;

  // Format date nicely
  const publishedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
      {/* Author Info */}
      <div className="bg-base-200 flex justify-between ">
        <div className="flex  items-center gap-3 p-4 ">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center mr-5">
          <IoBookmarkSharp />
          <CiShare2 />
        </div>
      </div>

      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title text-lg font-bold leading-snug">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{details.slice(0, 150)}...</p>

        <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <span className="font-semibold">{rating.number}</span>
            <span className="badge badge-sm badge-secondary ml-2 capitalize">
              {rating.badge}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <button className="btn btn-outline btn-sm">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
