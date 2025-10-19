import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import RightAside from "../../Components/MainLayout/RightAside";
import NewsDetailsCard from "../../Components/NewsDetailsCard/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();

  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newDetails);
  }, [data, id]);
  return (
    <div className="mt-3 w-11/12 mx-auto">
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 gap-7">
        <section className="mt-5 col-span-9">
          <h2 className="font-bold">Dreagon News</h2>
          <NewsDetailsCard key={news.id} news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
