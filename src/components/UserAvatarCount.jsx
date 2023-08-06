import React from "react";

export const UserAvatarCount = ({ count }) => {
  return (
    <figure className="avatar">
      <span>+{count}</span>
    </figure>
  );
};
