import Galleryitalien from "../Components/gallery/Gallery";
import styles from "../Components/gallery/Gallery.module.css";

const Gallery = () => {
  return (
    <article className={styles.Gallery}>
      <h1>Galleri</h1>
      <h2>Billederne herunder taget på mine turer i italien i 2022, 2023 og 2024</h2>
      <Galleryitalien/>
    </article>
  );
};
export default Gallery;


