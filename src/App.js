import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./component/Body";
import MyBookShelf from "./component/MyBookShelf";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/MyBookshelf",
    element: <MyBookShelf />,
  },
]);

function App() {
  return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
