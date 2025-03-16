import TopNavigationBar from "./components/TopNavigationBar";
import { useRef, useState } from "react";

function Gallery() {
  const images = Object.values(
    import.meta.glob("./assets/images/*.{png,jpg,jpeg,gif}", { eager: true })
  );
  console.log("Loaded Images:", images);

  return (
    <div className="Gallery">
      <TopNavigationBar />
      <div className="gallery-wrapper">
        <div className="image-renderer">
          <div className="image-collection">
            <div>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={(image as { default: string }).default}
                  alt={`image ${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
