import { useState } from "react";
import { useFetchblogs } from "../../Hoods/useFetchblog";
import styles from "./NewBlog.module.css";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { blogs} = useFetchblogs();

   const newblogs = blogs.filter((p) => p.tag.includes("forside"));

   return (
     <section className={styles.blog}>
       <h1>Ny indlæg</h1>

       <div className={styles.wrap}>
         {newblogs?.map((blog) => (
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
export default Blogs;