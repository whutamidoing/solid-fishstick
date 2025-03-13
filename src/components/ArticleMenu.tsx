import { useState } from "react";
import articles from "../data/articles.json";
import { Link } from "react-router-dom";

interface Article {
  title: string;
  platforms: string[];
  popularity: number;
  banner: string;
  link: string;
  contentPath: string;
}

function ArticleCard({
  title,
  platforms,
  popularity,
  banner,
  link,
  contentPath,
}: Article) {
  const popularityValues = articles.articles.map(
    (article) => article.popularity
  );
  const minPopularity = Math.min(...popularityValues);
  const maxPopularity = Math.max(...popularityValues);

  const scaledPopularity = Math.max(
    minPopularity,
    Math.min(popularity, maxPopularity)
  );
  const cardWidth =
    ((scaledPopularity - minPopularity) / (maxPopularity - minPopularity)) *
      40 +
    10 +
    "%";

  const cardStyle = {
    width: cardWidth,
  };

  return (
    <div className="article-card" style={cardStyle}>
      <Link
        to={link}
        state={{
          article: { title, platforms, popularity, banner, link, contentPath },
        }}
      >
        <div className="cardImg">
          <img src={banner} alt={title} />
        </div>
        <div className="article-details">
          <h2 className="article-title">{title}</h2>
          <div className="platform-section">
            {platforms.map((platform, index) => (
              <span key={index}>
                {platform}
                {index !== platforms.length - 1 ? "," : ""}{" "}
              </span>
            ))}
          </div>
          <div>{popularity}K</div>
        </div>
      </Link>
    </div>
  );
}

function ArticleMenu() {
  const [articleList] = useState<Article[]>(articles.articles);

  return (
    <div className="menu-wrapper">
      <h1 id="Titles">Featured Titles</h1>
      <div className="card-container">
        {articleList.map((article, index) => (
          <ArticleCard key={index} {...article}></ArticleCard>
        ))}
      </div>
    </div>
  );
}

export default ArticleMenu;
