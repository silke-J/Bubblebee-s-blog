import styles from "./AboutMe.module.css";
import Ommig1 from "../../../public/Ommig1.jpg";
import Ommig2 from "../../../public/Ommig2.jpg";
const AboutMe = () => {
  return (
    <div className={styles.AboutMe}>
      <div className={styles.AboutMeText}>
        <h1>Om Mig</h1>
        <h3>
          Jeg driver en rejseblog, hvor jeg deler mine oplevelser fra de mange
          lande, jeg besøger. Jeg elsker at tage billeder og skrive om de smukke
          steder og spændende oplevelser, jeg møder på min vej. Selvom jeg
          elsker at dele mine rejseoplevelser, foretrækker jeg at holde mig
          privat og fokusere på de steder, jeg besøger, fremfor at dele
          personlige oplysninger. På min blog finder du masser af tips og
          inspiration til, hvad man kan se og gøre i forskellige lande – fra de
          kendte turistattraktioner til de mere skjulte perler.
        </h3>
        <div className={styles.AboutMeImg}>
          <img src={Ommig1} alt="" />
          <img src={Ommig2} alt="" />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
