import { Link } from "react-router-dom";
import UserIcon from "../assets/icons/person.svg?react";
import GalleryIcon from "../assets/icons/image.svg?react";
import FavoritesIcon from "../assets/icons/favorite.svg?react";
import ContactIcon from "../assets/icons/mail.svg?react";
import LiveIcon from "../assets/icons/vite.svg?react";

interface ListGroupProps {
  isHovered: boolean;
}

export function ListGroup({ isHovered }: ListGroupProps) {
  let regions = [
    { name: "Wish Simulator", link: "/wish-sim" },
    { name: "Top", link: "#Top" },
    { name: "Titles", link: "#Titles" },
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
          <Link key={region.link} to={`${region.link}`}>
            {region.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Scroller() {
  let scrollers = [
    { name: "userprofile", link: "/user", svg: UserIcon },
    { name: "gallery", link: "/gallery", svg: GalleryIcon },
    { name: "favorites", link: "/user#Bookmarks", svg: FavoritesIcon },
    {
      name: "contact",
      link: "https://github.com/whutamidoing/solid-fishstick",
      svg: ContactIcon,
    },
    {
      name: "live",
      link: "https://whutamidoing.github.io/solid-fishstick/",
      svg: LiveIcon,
    },
  ];

  return (
    <ul className="scrollers">
      {scrollers.map(({ name, link, svg: Icon }) => (
        <Link to={link}>
          <li key={name}>
            <Icon />
          </li>
        </Link>
      ))}
    </ul>
  );
}
