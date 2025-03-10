import HomeIcon from "../assets/icons/home.svg?react";
import UserIcon from "../assets/icons/person.svg?react";
import GalleryIcon from "../assets/icons/image.svg?react";
import FavoritesIcon from "../assets/icons/favorite.svg?react";
import ContactIcon from "../assets/icons/mail.svg?react";

interface ListGroupProps {
  isHovered: boolean;
}

function Button() {}
export function ListGroup({ isHovered }: ListGroupProps) {
  let regions = [
    { name: "Menu", link: "/menu" },
    { name: "Wish Simulator", link: "/johto" },
    { name: "Hoenn", link: "/hoenn" },
    { name: "Sinnoh", link: "/sinnoh" },
    { name: "Unova", link: "/unova" },
    { name: "Kalos", link: "/kalos" },
    { name: "Alola", link: "/alola" },
    { name: "Galar", link: "/galar" },
    { name: "Legend", link: "/legend" },
  ];

  const message = regions.length === 0 ? <p>No Regions found</p> : null;

  return (
    <ul className={isHovered ? "list-group" : "list-group hidden"}>
      {message}
      <input
        type="text"
        name="searchbar"
        id="searchbar"
        placeholder="This Doesn't Work"
      />
      {regions.map((region) => (
        <li
          key={region.name}
          className={region.name == "Legend" ? "legend" : ""}
        >
          <a key={region.link} href={`${region.link}`}>
            {region.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Scroller() {
  let scrollers = [
    { name: "home", link: "./Menu", svg: HomeIcon },
    { name: "userprofile", link: "User", svg: UserIcon },
    { name: "gallery", link: "Gallery", svg: GalleryIcon },
    { name: "favorites", link: "Bookmarks", svg: FavoritesIcon },
    {
      name: "contact",
      link: "https://github.com/whutamidoing/solid-fishstick",
      svg: ContactIcon,
    },
  ];

  return (
    <ul className="scrollers">
      {scrollers.map(({ name, link, svg: Icon }) => (
        <a href={link} key={name}>
          <li>
            <Icon />
          </li>
        </a>
      ))}
    </ul>
  );
}
