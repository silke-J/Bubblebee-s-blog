import { useEffect, useState } from "react";
import json from "../../public/Experience/Experience.json";

const useFetchexperiences = () => {
  const [experiences, setExperience] = useState([]);
  const [error, setError] = useState(null);

  const fetchexperiences = async () => {
    try {
      const response = await fetch({json});
      const data = await response.json();
       console.log(data);
      setExperience(data.experiences);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
   
  };
  let Italien = experiences.filter((p) => p.tag.includes("italien"));

  useEffect(() => {
    fetchexperiences();
  }, []);

  return {
    experiences,
    Italien,
  };
};

export { useFetchexperiences };
