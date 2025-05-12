import styles from "./Top3.module.css";
import R from "../../../public/top3/rusland.jpg";
import J from "../../../public/top3/japan.jpg";
import G from "../../../public/top3/graekenland.jpg";

const Top3 = () => {
  return (
    <>
      <section className={styles.background}>
        <h2> Toppe 3 lande jeg skal </h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h2>Rusland</h2>
            <img src={R} alt="" />
            <h3>
              Rusland er et land med en rig historie, imponerende arkitektur og
              storslået natur. Oplev Kreml og Den Røde Plads i Moskva, nyd
              Vinterpaladset i Skt. Petersborg og udforsk Bajkalsøen. Smag
              traditionel borsjtj og pelmeni. Et unikt og kulturelt fascinerende
              rejsemål venter!
            </h3>
          </div>
          <div className={styles.card}>
            <h2>Japan</h2>
            <img src={J} alt="" />
            <h3>
              Japan kombinerer tradition og teknologi med gamle templer, sushi,
              kirsebærtræer og futuristiske byer. Oplev sumobrydning,
              neonbelyste gader og verdens hurtigste tog. Naturen spænder fra
              bjerge til tropiske strande. Et sikkert land med venlige mennesker
              – en uforglemmelig rejse venter!
            </h3>
          </div>
          <div className={styles.card}>
            <h2>Grækenland</h2>
            <img src={G} alt="" />
            <h3>
              Grækenland byder på en perfekt blanding af historie, smukke øer og
              fantastisk mad. Udforsk Akropolis, nyd solnedgangen i Santorini og
              oplev de krystalklare strande. Smag souvlaki og friskfanget fisk.
              Den gæstfrie befolkning og det solrige klima gør Grækenland til en
              uforglemmelig destination!
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Top3;
