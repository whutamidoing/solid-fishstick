import { ListGroup, Scroller } from "./ListGroup";
import { useState } from "react";
import userPic from "../assets/images/image.png";
import users from "../data/users.json";

interface User {
  username: string;
  email: string;
}

function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const [userList] = useState<User[]>(users.users);

  return (
    <>
      <nav
        className="sidebar"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="avatar-wrapper">
          <div className="icon">
            <img
              src={userPic}
              style={{ width: "100%", height: "100%", borderRadius: "50px" }}
            />
            <span className="icon-blob" />
          </div>
          <div className={`${isHovered ? "" : "hidden"} user-details`}>
            <span className={isHovered ? "" : "hidden"}>
              {userList.length > 0 ? userList[0].username : "Loading..."}
            </span>
            <span className={isHovered ? "" : "hidden"}>
              {userList.length > 0 ? userList[0].email : ""}
            </span>
          </div>
        </div>
        <div className="list-wrapper">
          <Scroller />
          <ListGroup isHovered={isHovered} />
        </div>
      </nav>
    </>
  );
}
export default Sidebar;
