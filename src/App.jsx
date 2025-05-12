import { useRoutes } from "react-router-dom";
import Footer from "./Components/footer/Footer";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Dishes from "./Pages/Dishes";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import ExperienceDetails from "./Pages/experiencedetails/Experiencedetails";
import DishesDetails from "./Pages/dishesdalis/DishesDetails";
import BlogDetails from "./Pages/blogdetalis/Blogdetalis";




function App() {

 const routes = useRoutes([
   { path: "/", element: <Home /> },
   { path: "/gallery", element: <Gallery /> },
   { path: "/about", element: <About /> },
   { path: "/experience", element: <Experience /> },
   { path: "/experience/:id", element: <ExperienceDetails /> },
   { path: "/dishes", element: <Dishes /> },
   { path: "/dishes/:id", element: <DishesDetails /> },
   { path: "/blog", element: <Blog /> },
   { path: "/blogs/:id", element: <BlogDetails /> },
   { path: "/contact", element: <Contact /> },
 ]);

  return (
    <div className="app">
      <Navigation />
      <div className="content">{routes}</div>
      <Footer />
    </div>
  );
}

export default App
