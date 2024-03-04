import { RouterProvider, createBrowserRouter } from "react-router-dom";
import User from "./components/getuser/User";
import Add from "./components/adduser/add";
import Edit from "./components/updateuser/edit";

export default function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/edit/:id",
      element: <Edit />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}
