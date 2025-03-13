function TopNavigationBar() {
  let nav = [
    { name: "Home", link: "../" },
    { name: "Gallery", link: "../" },
    { name: "Favorites", link: "../" },
    { name: "Wish Simulator", link: "../" },
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
