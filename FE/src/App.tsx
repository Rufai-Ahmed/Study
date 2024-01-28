import { RouterProvider } from "react-router-dom";
import pix from "./Assets/775118.jpg";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
