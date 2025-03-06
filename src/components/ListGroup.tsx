import { useEffect, useState } from "react";

interface ListGroupProps {
  isHovered: boolean;
}

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
        <li key={region.name}>
          <a key={region.link} href={`${region.link}`}>
            {region.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Scroller() {
  let images = import.meta.glob("../assets/icons/*.svg", { eager: true });

  let scrollerPaths = Object.values(images).map(
    (img) => (img as { default: string }).default
  );

  const [svgs, setSvgs] = useState<string[]>([]);

  useEffect(() => {
    Promise.all(
      scrollerPaths.map((path) => fetch(path).then((res) => res.text()))
    ).then(setSvgs);
  }, []);

  return (
    <ul className="scrollers">
      {svgs.map((svg, index) => (
        <a href="">
          <li key={index} dangerouslySetInnerHTML={{ __html: svg }}></li>
        </a>
      ))}
    </ul>
  );
}
