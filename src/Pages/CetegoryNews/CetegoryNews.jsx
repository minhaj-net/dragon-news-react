import React from "react";
import { useParams } from "react-router";

const CetegoryNews = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Cetegoriews news - {id}</h1>
    </div>
  );
};

export default CetegoryNews;
