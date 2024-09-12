import React from "react";
import { useSelector } from "react-redux";

import "./userlist.style.scss";

function UserList() {
  const userSelector = useSelector((state) => state.user?.data);
  return (
    userSelector?.length > 0 && (
      <div className="user-conatiner">
        {userSelector?.map((user) => (
          <div className="user-details">
            <img src={user?.avatar} alt="user"/>
            <span>{user?.first_name}</span>
          </div>
        ))}
      </div>
    )
  );
}

export default UserList;
