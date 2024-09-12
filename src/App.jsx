import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About.jsx";
import OurClasses from "./components/pages/Classes/OurClasses/OurClasses.jsx";
import ClassDetail from "./components/pages/Classes/Classes Detail/ClassDetail.jsx";
import OurTrainers from "./components/pages/Trainers/OurTrainers/OurTrainers.jsx";
import TrainersDetail from "./components/pages/Trainers/TrainersDetail/TrainersDetail.jsx";
import OurEvents from "./components/pages/Events/OurEvents/OurEvents.jsx";
import EventsDetail from "./components/pages/Events/EventsDetail/EventsDetail.jsx";
import OurBlog from "./components/pages/Blog/OurBlog/OurBlog.jsx";
import BlogDetail from "./components/pages/Blog/BlogDetail/BlogDetails.jsx";
import Contact from "./components/pages/Contact/contact.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/OurClasses",
      element: <OurClasses />,
    },
    {
      path: "/ClassesDetail",
      element: <ClassDetail />,
    },
    {
      path: "/OurTrainers",
      element: <OurTrainers />,
    },
    {
      path: "/TrainersDetail",
      element: <TrainersDetail />,
    },
    {
      path: "/OurEvents",
      element: <OurEvents />,
    },
    {
      path: "/EventsDetail",
      element: <EventsDetail />,
    },
    {
      path: "/OurBlog",
      element: <OurBlog />,
    },
    {
      path: "/BlogDetails",
      element: <BlogDetail />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    
  ]);
  return (
    <>
      <>
        <div className="App font-lab ">
          <RouterProvider router={router} />
        </div>
      </>
    </>
  );
}

export default App
