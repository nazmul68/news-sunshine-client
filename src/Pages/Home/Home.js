import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummarCard/NewsSummaryCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <h3 className="text-center">
        News Sunshine Home{" "}
        <span className="text-primary"> {allNews.length}</span>
      </h3>
      {allNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
      ))}
    </div>
  );
};

export default Home;
