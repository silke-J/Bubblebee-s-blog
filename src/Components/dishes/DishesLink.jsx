import { Link } from "react-router-dom";
import styles from "./DishesLink.module.css";
import { dishes} from "../../json/Dishes/Dishes.json";

const DishesLink = () => {
 
  return (
    <section className={styles.dishe}>
      <h1>Italienske retter du skal smage</h1>
      
      <div className={styles.wrap}>
        {dishes.map((dishe) => (
          <div className={styles.card} key={dishe.id}>
            <Link to={`/dishes/${dishe?.id}`}>
              <img src={dishe?.image} alt={dishe?.name} />
            </Link>
            <div className={styles.disheName}>
              <h3>{dishe?.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DishesLink;
