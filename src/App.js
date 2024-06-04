import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./component/Body";
import MyBookShelf from "./component/MyBookShelf";
import { Provider } from "react-redux";
import store from "./utils/store";

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
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}></RouterProvider>;
    </Provider>
  );
}

export default App;
