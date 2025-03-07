function Banner() {
  return <></>;
}
export function TopFeatured() {}

export function Carousel() {
  let cards = [
    { pick: "top1", imgsrc: "../assets/images/20240505174153.png" },
    { pick: "top2", imgsrc: "../assets/images/20240505174153.png" },
    { pick: "top3", imgsrc: "../assets/images/20240505174153.png" },
    { pick: "top4", imgsrc: "../assets/images/20240505174153.png" },
  ];
  <div className="featured-wrapper">
    {cards.map((card) => (
      <div className="card" key={card.pick}>
        <img src={card.imgsrc} />
      </div>
    ))}
    ;
  </div>;
}
export default Banner;
