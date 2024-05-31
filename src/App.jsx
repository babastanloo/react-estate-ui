import Layout from "./pages/layout/Layout";
import HomePage from "./pages/home/HomePage";
import LoginPage from './pages/loginPage/LoginPage';
import SinglePage from "./pages/singlePage/SinglePage";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./pages/listPages/ListPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },

        {
          path: "/login",
          element: <LoginPage />,
        },

        {
          path: "/:id",
          element: <SinglePage />,
        },

        {
          path: "/*",
          element: <PageNotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
