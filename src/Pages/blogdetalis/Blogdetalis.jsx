import { useParams } from "react-router-dom";
import styles from "./Blogdetails.module.css";
import { useFetchblogs } from "../../Hoods/useFetchblog";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs } = useFetchblogs();
  const blog = blogs.find((b) => b.id === id);

  return (
    <>
      {blog && (
        <article className={styles.blog}>
          <h1>{blog.name}</h1>
          <h2>{blog.title}</h2>

          <div className={styles.info}>
            <h3>{blog.description2}</h3>
            <img src={blog.image} alt={blog.name} />
          </div>
        </article>
      )}
    </>
  );
};

export default BlogDetails;
