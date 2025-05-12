
import { useParams } from "react-router-dom";
import styles from "./Experiencedetails.module.css";
import {useFetchexperiences } from "../../Hoods/useFetchexperiences";

const ExperienceDetails = () => {
  const { id } = useParams();
 const { experiences } = useFetchexperiences();
  const experience = experiences.find((e) => e.id === id)

console.log(experiences)
  return (
    <>
      {experience && (
        <article className={styles.experience}>
          <h1>{experience.name}</h1>
          <h2>{experience.title}</h2>

          <div className={styles.info}>
            <h3>{experience.description1}</h3>

            <div className={styles.pics}>
              <img src={experience.image} alt={experience.name} />
              <img src={experience.images} alt={experience.name} />
            </div>
            <div className={styles.info2}>
              <h3>{experience.description2}</h3>
            </div>
          </div>
        </article>
      )}
    </>
  );
}

export default ExperienceDetails;
