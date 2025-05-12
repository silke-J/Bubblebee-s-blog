import { useParams } from "react-router-dom";
import styles from "./Dishesdetails.module.css";
import { dishes } from "../../json/Dishes/Dishes.json";

const DishesDetails = () => {
  const { id } = useParams();
  const dishe = dishes.find((d) => d.id === id);

  return (
    <>
      {dishe && (
        <article className={styles.dishe}>
          <h1>{dishe.name}</h1>
          <h2>{dishe.title}</h2>

          <div className={styles.info}>
            <h3>{dishe.description}</h3>
            <img src={dishe.image} alt={dishe.name} />
          </div>
        </article>
      )}
    </>
  );
};

export default DishesDetails;
