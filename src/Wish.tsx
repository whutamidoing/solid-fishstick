import CloseIcon from "./assets/icons/close.svg?react";
import Intertwined from "./assets/icons/Intertwined.png";
import PullAnimation from "./assets/others/pull.mp4";
import WishInventory from "./data/wish-inventory.json";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Item {
  name: string;
  rarity: number;
  splashart: string;
}

function PullCollection({ onClose }: { onClose: () => void }) {
  const [itemList] = useState<Item[]>(WishInventory.item);

  const wish = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 101)
  );

  const getRandomItemByRarity = (value: number) => {
    //rarity system 5 = 2% 4 = 10%
    let rarity = 3;
    if (value >= 98) rarity = 5;
    else if (value >= 90) rarity = 4;

    //look for item from rarity system depending on rarity
    const filteredItems = itemList.filter((item) => item.rarity === rarity);
    //random pick from rarity
    return filteredItems[Math.floor(Math.random() * filteredItems.length)];
  };
  return (
    <>
      <div className="pull-background">
        <button className="close" onClick={onClose}>
          <CloseIcon />
        </button>
        {wish.map((wishValue, index) => {
          const pulledItem = getRandomItemByRarity(wishValue);
          return (
            <div className="pull" key={index}>
              <div
                style={{
                  boxShadow: `inset 0px 0px 20px 0px ${
                    pulledItem.rarity === 5
                      ? "#FFD700"
                      : pulledItem.rarity === 4
                      ? "#A020F0"
                      : "#1E90FF"
                  }`,
                  backgroundImage: `url(${pulledItem.splashart})`,
                }}
                className="pull-item"
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function Wish() {
  const [isPulling, setIsPulling] = useState(false);
  const [showCollection, setShowCollection] = useState(false);

  function closeCollection() {
    setShowCollection(false);
  }

  function playPullAnimation() {
    setIsPulling(true);

    const videoElement = document.createElement("video");
    videoElement.src = PullAnimation as unknown as string;
    videoElement.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10;
        object-fit: cover;
        background-color: rgba(0, 0, 0, 0.8);
        transform: scale(1.1);
      `;
    videoElement.autoplay = true;
    videoElement.onmousedown = () => {
      videoElement.currentTime = videoElement.duration;
      videoElement.pause();
      videoElement.dispatchEvent(new Event("ended"));
    };

    videoElement.onended = () => {
      document.body.removeChild(videoElement);

      //white blank after animation to mask transition
      const whiteBlank = document.createElement("div");
      whiteBlank.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: white;
          z-index: 10;
          opacity: 1;
          transition: opacity 0.5s ease-out;
      `;
      document.body.appendChild(whiteBlank);
      setTimeout(() => {
        setShowCollection(true);
        whiteBlank.style.opacity = "0";
        setTimeout(() => {
          setIsPulling(false);
          document.body.removeChild(whiteBlank);

          //show pull collection
        }, 500);
      }, 500);
    };
    document.body.appendChild(videoElement);
  }

  return (
    <>
      {showCollection ? (
        <PullCollection onClose={closeCollection} />
      ) : (
        <>
          <div className="blur" />
          <div className="full-banner">
            <Link className="close" to="/">
              <CloseIcon />
            </Link>
            <div className="actual-banner">
              <div className="wish">
                <div className="banner-label">Character Event Wish</div>
                <div className="banner-details">
                  <h3>Probability increased!</h3>
                  <div className="banner-rules">
                    Every 10 wishes is guaranteed to + include at least one
                    4-star or higher item.
                  </div>
                  <div className="exclusion">
                    5-star event-exclusive characters can only be obtained in
                    the specified wish-during the specified time period(s)
                  </div>
                </div>
              </div>
            </div>
            <button onClick={playPullAnimation} id="PullButton">
              <div>Wish ×10</div>
              <div>
                <img src={Intertwined} alt="intertwined" />
                ×10
              </div>
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Wish;
