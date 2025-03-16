import { Link } from "react-router-dom";

function TopNavigationBar() {
  let nav = [
    { name: "Home", link: "/" },
    { name: "Favorites", link: "/User#Bookmarks" },
    { name: "Wish Simulator", link: "/wish-sim" },
  ];
  return (
    <>
      <div className="navbar-wrapper">
        <div className="banner-bar"></div>
        <div className="link-bar">
          <ul className="link-list">
            {nav.map(({ name, link }) => (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default TopNavigationBar;
