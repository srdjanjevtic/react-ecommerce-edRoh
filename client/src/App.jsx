import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import CheckOut from "./pages/CheckOut";
import Confirmation from "./pages/Confirmation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="item/:itemId" element={<ItemDetails />} />
      <Route path="checkout" element={<CheckOut />} />
      <Route path="checkout/success" element={<Confirmation />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
