
import Bloginfo from "../Components/bloginfo/Bloginfo";
import Blogs from "../Components/newblog/NewBlog";
import ImageSlider from "../Components/slider/Slider";
import Top3 from "../Components/top3/Top3";

const Home = () => {
  return (
      <section>
        <ImageSlider />
        <Bloginfo />
        <Top3/>
        <Blogs/>
      </section>
  );
};
export default Home;
