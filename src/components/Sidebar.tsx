import { ListGroup, Scroller } from "./ListGroup";
import { useState, useEffect } from "react";
import userPic from "../assets/images/image.png";

interface User {
  username: string;
  email: string;
}

function Sidebar() {
  const [user, setUser] = useState<User[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch(" /json/users.json")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.users)) {
          setUser(data.users);
        }
      })
      .catch((error) => console.error("Error fetching user", error));
  }, []);

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
          <span className={isHovered ? "" : "hidden"}>
            {user.length > 0 ? user[0].username : "Loading..."}
          </span>
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
