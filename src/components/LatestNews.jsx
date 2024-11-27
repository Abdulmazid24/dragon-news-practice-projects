import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center">
      <p className="bg-[#D72050] text-white px-3 py-1 ">Latest</p>
      <Marquee pauseOnHover={true} className="space-x-10 bg-base-200 py-1 px-3">
        <Link to={'/news'}>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to={'/news'}>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to={'/news'}>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to={'/news'}>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to={'/news'}>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link to={'/news'}>
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
