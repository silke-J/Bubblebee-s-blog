import { Link } from "react-router-dom";
import styles from "./ExperienceLink.module.css";
import { useFetchexperiences } from "../../Hoods/useFetchexperiences";

const ExperienceLink = () => {
  const {experiences}=useFetchexperiences()
  return (
    <section className={styles.experience}>
      <h1>Oplevelser du skal se i Italien </h1>

      <div className={styles.wrap}>
        {experiences.map((experience) => (
          <div className={styles.card} key={experience.id}>
            <Link to={`/experience/${experience?.id}`}>
              <img src={experience?.image} alt={experience?.name} />
            </Link>
            <div className={styles.experienceName}>
              <h3>{experience?.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceLink;
