import { useEffect, useState } from "react";
import json from "/Blog/Blog.json";

const useFetchblogs = () => {
  const [blogs, setBlog] = useState([]);
  const [error, setError] = useState(null);

  const fetchblog = async () => {
    try {
      const response = await fetch({json});
      const data = await response.json();
      setBlog(data.blogs);
    } catch (error) {
      setError(error.message);
    }
   
  };
  let forside = blogs.filter((p) => p.tag.includes("forside"));

  useEffect(() => {
    fetchblog();
  }, []);

  return {
    blogs,
    forside,
  };
};

export { useFetchblogs };
