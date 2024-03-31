import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import { StoryContextProvider } from "./StoryContext/StoryContext.jsx";
import Filter from "./components/Filter/Filter.jsx";
import Admin from "./pages/Admin.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";
import Policy from "./pages/Policy.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import DetailedNews from "./components/NewsSection/DetailedNews.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App check="true" />,
    children: [
      {
        path: "/home",
        element: <App check="true" />,
      }
    ],
  },
  {
    path: "/api/auth",
    element: <App check="false" />,
    children: [
      {
        path: "/api/auth/login",
        element: <AdminLogin/>,
      }
    ],
  },
  {
    path: "/samsara",
    element: <App check="false" />,
    children: [
      {
        path: "/samsara/aboutUs",
        element: <AboutUs/>,
      },{
        path: "/samsara/contact",
        element: <Contact/>,
      },
      {
        path: "/samsara/policy",
        element: <Policy/>,
      }
    ],
  },
  {
    path: "/search",
    element: <App check="false" />,
    children: [
      
        {
          path: "/search/:query", // Define the path with a placeholder for the query parameter
          element: <Filter />,     // Use the Filter component as the element for this route
        }
  

    ],
  },
  {
    path: "/detailed",
    element: <App check="false" />,
    children: [
      
        {
          path: "/detailed/:id", // Define the path with a placeholder for the query parameter
          element: <DetailedNews/>,     // Use the Filter component as the element for this route
        }
  

    ],
  },
  {
    path: "/other",
    element: <App check="false" />,
    children: [
      
        {
          path: "/other/news", 
          element: <Filter filterKey="other"/>,    
        }
  

    ],
  },
  {
    path:"/academic",
    element:<App check="false"/>,
    children:[
      {
        path:"/academic/news",
        element: <Filter filterKey="academic" />,
      
      }
    ]
  },
  {
    path:"/campusExplore",
    element:<App check="false"/>,
    children:[
      {
        path:"/campusExplore/visit",
        element: <Filter filterKey="campus Explore" />,
      
      }
    ]
  },
  {
    path: "/studentActivity",
    element: <App check="false" />,
    children: [
      {
        path: "/studentActivity/cultural",
        element: <Filter filterKey="cultural" />,
      },
      {
        path: "/studentActivity/technical",
        element: <Filter filterKey="technical" />,
      },
      {
        path: "/studentActivity/sports",
        element: <Filter filterKey="sport" />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoryContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </StoryContextProvider>
  </React.StrictMode>
);
