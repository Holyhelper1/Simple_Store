import { ProductDetail } from "../pages/ProductDetail/ProductDetail";
import { ProductsPage } from "../pages/Products/Products-page";

export const routes = [
  { path: "/", element: <ProductsPage /> },
  { path: "/product/:id", element: <ProductDetail/> },
  { path: "*", element: <div>ERROR.PAGE_NOT_EXIST</div> },
];
