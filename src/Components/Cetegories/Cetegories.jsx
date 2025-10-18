import React, { use } from "react";
import { NavLink } from "react-router";

const promiseData = fetch("/categories.json").then((res) => res.json());
const Cetegoris = () => {
  const categories = use(promiseData);
  console.log(categories);
  return (
    <div>
      <h1 className="font-bold ">All cetegories ({categories.length})</h1>
      <div className="flex flex-col mt-2">
        {categories.map((category) => (
          <NavLink
            to={`/cetegory/${category.id}`}
            className="btn bg-base-100 border-none hover:bg-base-200 "
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Cetegoris;
