import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import TopNavigationBar from "./components/TopNavigationBar";
import { Carousel } from "./components/Banner";

function ArticlePage() {
  const location = useLocation();
  const { article } = location.state;
  const [content, setContent] = useState("");
  console.log(article.title);
  useEffect(() => {
    if (article?.contentPath) {
      fetch(article.contentPath)
        .then((res) => res.text())
        .then((text) => setContent(text))
        .catch((err) => console.error("no content", err));
    }
  }, [article]);

  if (!article)
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            height: "100vh",
          }}
        >
          <p
            style={{
              fontFamily: "poppins ,Arial, sans-serif",
              fontSize: "36px",
            }}
          >
            Loading...
          </p>
          <div style={{ fontFamily: "poppins ,Arial, sans-serif" }}>
            or no article
          </div>
        </div>
      </>
    );
  return (
    <>
      <TopNavigationBar />
      <div className="actual-content">
        <div
          style={{ backgroundImage: `url(${article.banner})` }}
          className="article-banner"
        />
        <div className="article-content">
          <h1 className="article-title">{article.title}</h1>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
        </div>
        <div className="discover-articles-global">
          <h1>Dicover New Articles</h1>
          <Carousel></Carousel>
        </div>
      </div>
    </>
  );
}

export default ArticlePage;
