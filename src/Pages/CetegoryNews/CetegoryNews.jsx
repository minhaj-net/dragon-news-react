import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../Components/NewsCard/NewsCard";

const CetegoryNews = () => {
  const { id } = useParams();
  const newsData = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(newsData);
      return;
    } else if (id == "1") {
      const filteredData = newsData.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredData);
      return;
    } else {
      const filteredData = newsData.filter(
        (news) => news.category_id === Number(id)
      );
      setCategoryNews(filteredData);
      return;
    }
  }, [newsData, id]);
  return (
    <div>
      <h1 className="font-bold ">
        Total{" "}
        <span className="font-bold text-secondary">{categoryNews.length}</span>{" "}
        news found
      </h1>

      <div>
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CetegoryNews;
