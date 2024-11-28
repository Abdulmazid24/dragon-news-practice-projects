import { FaStar, FaEye, FaShareAlt } from 'react-icons/fa';

const NewsCard = (props = {}) => {
  const { news } = props || {};
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        {/* Author Info */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <img
              src={news.author.img}
              alt={news.author.name}
              className="rounded-full w-8 h-8 mr-2"
            />
            <span>{news.author.name}</span>
          </div>
          <span>
            {new Date(news.author.published_date).toLocaleDateString()}
          </span>
        </div>

        {/* Title */}
        <h2 className="card-title text-lg mt-2">{news.title}</h2>

        {/* Image */}
        <img
          src={news.image_url}
          alt="News Thumbnail"
          className="rounded-lg mt-4"
        />

        {/* Details */}
        <p className="text-gray-600 text-sm mt-2">
          {news.details.substring(0, 150)}...{' '}
          <span className="text-blue-500 cursor-pointer">Read More</span>
        </p>

        {/* Actions */}
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex items-center text-yellow-500">
            <FaStar />
            <span className="ml-1">{news.rating.number}</span>
            <span className="ml-2 text-sm text-gray-500">
              ({news.rating.badge})
            </span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaEye />
            <span className="ml-1">{news.total_view}</span>
          </div>
          <FaShareAlt className="text-gray-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
