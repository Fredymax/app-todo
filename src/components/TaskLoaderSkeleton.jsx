import React from "react";

export const TaskLoaderSkeleton = ({ quantity = 2 }) => {
  return (
    <>
      {Array(quantity)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="card skeleton"></div>
        ))}
    </>
  );
};
