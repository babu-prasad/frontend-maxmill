import React from "react";
import UserItem from "../components/UserItem";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h1>No Users found...</h1>
      </div>
    );
  }
  return (
    <ul>
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            image={user.image}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};
export default UserList;
