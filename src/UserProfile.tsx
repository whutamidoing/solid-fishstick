import users from "./data/users.json";
import { useState } from "react";

interface User {
  username: string;
  email: string;
  profBanner: string;
  profPicture: string;
}

function UserProfile() {
  const [userList] = useState<User[]>(users.users);
  const curruser = userList[0];

  return (
    <>
      <div
        className="profile-banner"
        style={{ backgroundImage: `url(${curruser.profBanner})` }}
      ></div>
      <div className="user-details">
        <div
          className="profile-picture"
          style={{ backgroundImage: `url(${curruser.profPicture})` }}
        />
        <div className="user">
          <span>{curruser.username}</span>
          <span className="email">{curruser.email}</span>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
