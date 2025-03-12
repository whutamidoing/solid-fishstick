import { useState } from "react";
import ArrowIcon from "../assets/icons/arrow.svg?react";
import articles from "../data/articles.json";
import { Link } from "react-router-dom";

export function TopFeatured() {
  const images = import.meta.glob("../assets/images/*", { eager: true });
  const imagePaths = Object.values(images).map(
    (img) => (img as { default: string }).default
  );

  return (
    <div className="featured-wrapper">
      <div className="video-container">
        <iframe src="https://www.youtube.com/embed/6uT8wGtB3yQ"></iframe>
      </div>
      <div className="featured-description">
        <span className="title-name">ELDEN RING Shadow of the Erdtree</span>
        <div className="preview-pics">
          <div className="preview-wrapper">
            <img src={imagePaths[4]} alt="" />
            <img src={imagePaths[1]} alt="" />
            <img src={imagePaths[2]} alt="" />
            <img src={imagePaths[3]} alt="" />
          </div>
        </div>
        <div className="title-description">
          THE CRITICALLY ACCLAIMED FANTASY ACTION RPG. Rise, Tarnished, and be
          guided by grace to brandish the power of the Elden Ring and become an
          Elden Lord in the Lands Between.
        </div>
      </div>
    </div>
  );
}

export function Carousel() {
  const [active, setActive] = useState(1);
  let topArticles = articles.articles
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 4);

  let cards = topArticles.map((article, index) => ({
    pick: `Top ${index + 1}`,
    title: article.title,
    popularity: article.popularity,
    platforms: article.platforms,
    banner: article.banner,
    link: article.link,
    contentPath: article.contentPath,
  }));
  const nextSlide = () => {
    setActive((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="mind">
      <button className="left" onClick={prevSlide}>
        <ArrowIcon fill="#fff" />
      </button>
      <div className="carousel-wrapper">
        {cards.map((card, index) => {
          let positionClass = "";
          // let translateX = 0;
          // let scale = 1;
          // let opacity = 1;

          // if (index === active) {
          // } else if (index > active) {
          // } else if (index < active) {
          // }

          if (index === active) positionClass = "card-1";
          else if (index === (active + 1) % cards.length)
            positionClass = "card-2";
          else if (index === (active - 1 + cards.length) % cards.length)
            positionClass = "card-0";
          else positionClass = "card-3";

          for (var i = index + 1; i < cards.length; i++) {}

          return (
            <Link
              key={card.pick}
              to={card.link}
              state={{
                article: {
                  title: card.title,
                  link: card.link,
                  banner: card.banner,
                  platform: card.platforms,
                  contentPath: card.contentPath,
                  popularity: card.popularity,
                },
              }}
            >
              <div
                className={`card ${positionClass}`}
                key={card.pick}
                style={{}}
              >
                <img src={card.banner} alt={card.pick} />
                <div>
                  {card.pick}: <span>{card.title}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <button className="right" onClick={nextSlide}>
        <ArrowIcon fill="#fff" />
      </button>
    </div>
  );
}

export function Banner() {
  return (
    <>
      <div className="banner">
        {TopFeatured()}
        {Carousel()}
      </div>
    </>
  );
}

export default Banner;
