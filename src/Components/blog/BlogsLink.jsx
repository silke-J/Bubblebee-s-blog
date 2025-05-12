import { Link } from "react-router-dom";
import styles from "./BlogsLink.module.css";
import { useFetchblogs } from "../../Hoods/useFetchblog.jsx";

const BlogLink = () => {
  const { blogs } = useFetchblogs();
  return (
    <section className={styles.blog}>
      <h1>Blog indlæg</h1>

      <div className={styles.wrap}>
        {blogs.map((blog) => (
          <div className={styles.card} key={blog.id}>
              <Link to={`/blogs/${blog?.id}`} className={styles.cardflex}>
                <div className={styles.blogImg}>
                  <img src={blog?.image} alt={blog?.name} />
                </div>
                <div className={styles.blogName}>
                  <h2>{blog?.name}</h2>
                  <h3>{blog?.description}</h3>
                </div>
              </Link>
            </div>
        ))}
      </div>
    </section>
  );
};

export default BlogLink;
