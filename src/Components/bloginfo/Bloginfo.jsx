import styles from "./Bloginfo.module.css";
import it1 from "../../../public/it1.jpg";
const Bloginfo = () => {
  return (
    <section>
      <div className={styles.background}>
        <div className={styles.title}>
          <h2>Min blog</h2>
          <h3>Tour Guide</h3>
        </div>

        <div className={styles.info}>
          <h3>
            Jeg elsker at møde mennesker fra hele verden, og jeg gør det til min
            mission at give mindeværdige ture og oplevelser for mennesker. Jeg
            besluttede mig for at blive blogger i 2025!
          </h3>
          <h3>
            Når jeg ikke har travlt med at arbejde, bruger jeg tid på at
            undersøge og udforske nye muligheder for at gøre min blog bedre og
            hjælpe dig med at gøre din tur interessant og relevant - hvilket
            betyder, at du vil opdage noget nyt, hver gang du læser min blog, at
            lave på din tur.
          </h3>
          <h3>
            Tag et kig på, hvad jeg mener, du skal se i lande og kontakt os,
            hvis du vil vide mere.
          </h3>
          <h3>Jeg kan ikke vente med at vise jer mine ture!</h3>
        </div>
      </div>

      <div className={styles.img}>
        <img src={it1} alt="" />
      </div>
    </section>
  );
}
export default Bloginfo;
