import { useEffect, useState } from "react";
import json from "../../public/Dishes/Dishes.json";
const useFetchdishes = () => {
  const [dishes, setDishe] = useState([]);
  const [error, setError] = useState(null);

  const fetchdishes = async () => {
    try {
      const response = await fetch({json});
      const data = await response.json();
      setDishe(data.dishes);
    } catch (error) {
      setError(error.message);
    }
   
  };
  let Italienske = dishes.filter((p) => p.tag.includes("italienske"));

  useEffect(() => {
    fetchdishes();
  }, []);

  return {
    dishes,
    Italienske,
  };
};

export { useFetchdishes };
