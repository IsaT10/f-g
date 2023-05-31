import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: () => fetch("http://localhost:5000/services"),
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <Login /> },
      {path:'/reviews',element:<Reviews/>}
    ],
  },
]);
