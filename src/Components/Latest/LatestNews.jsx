import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="bg-base-200 flex my-4 items-center gap-5 p-3">
      <p className="text-base-300 bg-secondary px-4 py-2 font-medium">Latest</p>

      <Marquee pauseOnHover speed={60}>
        <p className="font-semibold  mr-5">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as.....
        </p>
        <p className="font-semibold mr-5">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as.....
        </p>
        <p className="font-semibold mr-5">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as.....
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
