function TopNavigationBar() {
  let nav = [
    { name: "Home", link: "/solid-fishstick/" },
    { name: "Favorites", link: "/solid-fishstick/User#Bookmarks" },
    { name: "Wish Simulator", link: "/solid-fishstick/wish-sim" },
  ];
  return (
    <>
      <div className="navbar-wrapper">
        <div className="banner-bar"></div>
        <div className="link-bar">
          <ul className="link-list">
            {nav.map(({ name, link }) => (
              <li key={name}>
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default TopNavigationBar;
