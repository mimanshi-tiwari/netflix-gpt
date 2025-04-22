import { createBrowserRouter } from "react-router-dom";
import Browse from "./browse";
import Login from "./login";
import { RouterProvider, Outlet } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}>
        <Outlet />
      </RouterProvider>
    </div>
  );
};

export default Body;
