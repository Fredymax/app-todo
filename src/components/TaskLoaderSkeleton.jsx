import React from 'react'

export const TaskLoaderSkeleton = ({ quantity = 3 }) => {
  return (
    <div className="task__list__container">
      {Array(quantity)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="card skeleton"></div>
        ))}
    </div>
  )
}
