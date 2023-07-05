import React from "react";

const UserItem = (props) => {
  return (
    <li>
      <div className="user-item__info">
        <h2>{props.name}</h2>
      </div>

      <h3>
        {props.placeCount} {props.placeCount === 1 ? "place" : "places"}{" "}
      </h3>
    </li>
  );
};
export default UserItem;
