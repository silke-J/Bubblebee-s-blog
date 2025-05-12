import { useState, useEffect } from "react";
import styles from "./Slider.module.css";
import slider1 from "../../../public/slider/slider1.jpg";
import slider2 from "../../../public/slider/slider2.jpg";
import slider3 from "../../../public/slider/slider3.jpg";

const images = [slider1, slider2, slider3];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2500); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className={styles.background}>
        <h1>Bubblebee`s Blog</h1>
        <h2>Travel. Discover. Learn</h2>

        <div className={styles.slider}>
          <img
            className={styles.images}
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
