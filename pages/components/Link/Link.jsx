import React from "react";

const Link = ({ name, link } ) => {
  return (
    <div>
      <li className="mx-5">
        <a href={link}>{name}</a>
      </li>
    </div>
  );
};

export default Link;
