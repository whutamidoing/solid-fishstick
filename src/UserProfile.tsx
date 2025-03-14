import users from "./data/users.json";
import { useState, useEffect } from "react";
import HomeIcon from "./assets/icons/home.svg?react";
import { Link } from "react-router-dom";
import articles from "./data/articles.json";
import { ArticleCard } from "./components/ArticleMenu";

interface User {
  username: string;
  email: string;
  profBanner: string;
  profPicture: string;
  post: number;
  bookmarks: string[];
}

interface Article {
  title: string;
  platforms: string[];
  popularity: number;
  banner: string;
  link: string;
  contentPath: string;
}

function UserProfile() {
  const [userList] = useState<User[]>(users.users);
  const curruser = userList[0];

  const [articleList] = useState<Article[]>(
    articles.articles.filter((article) =>
      curruser.bookmarks.includes(article.title)
    )
  );

  return (
    <>
      <div
        className="profile-banner"
        style={{ backgroundImage: `url(${curruser.profBanner})` }}
      ></div>
      <div className="user-container">
        <div
          className="profile-picture"
          style={{ backgroundImage: `url(${curruser.profPicture})` }}
        />
        <div className="user">
          <span>{curruser.username}</span>
          <span className="email">{curruser.email}</span>
        </div>
      </div>
      <div className="user-stats">
        <div>
          <span>Contributions: {curruser.post.toString()}</span>
          <span>Follows: {curruser.bookmarks.length.toString()}</span>
        </div>
        <div className="home">
          <a href="../">
            <HomeIcon />
          </a>
        </div>
      </div>
      <div className="user-saves">
        <h1>Saved</h1>
        <div id="Bookmarks">
          {articleList.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
