import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummarCard/NewsSummaryCard";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h3 className="text-center">
        This category has{" "}
        <span className="text-primary"> {categoryNews.length} </span> news.
      </h3>
      {categoryNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
      ))}
    </div>
  );
};

export default Category;
