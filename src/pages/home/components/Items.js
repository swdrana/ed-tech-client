import React from "react";
import SingleItems from "./SingleItems";

const Items = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div className="">
      {/* Hero Header  */}
      <div className="container mx-auto mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50 read-aloud">
          Latest Items
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-400">
          These {6} Items were recently added.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 container mx-auto gap-5 md:gap-y-10">
        {arr.map((item) => {
          return <SingleItems key={item} item={item}/>;
        })}
      </div>
    </div>
  );
};

export default Items;
