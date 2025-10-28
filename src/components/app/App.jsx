import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import RestaurantsPageRedirect from "../../redirects/RestaurantsPageRedirect";
import RestaurantsPage from "../../pages/restaurants/RestaurantsPage";
import MenuPage from "../../pages/menu/MenuPage";
import ReviewsPage from "../../pages/reviews/ReviewsPage";
import DishPageRedirect from "../../redirects/DishPageRedirect";
import DishPage from "../../pages/dish/DishPage";
import ThemeColorContextProvider from "../themeColorContextProvider/ThemeColorContextProvider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeColorContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="restaurants" replace />} />
              <Route path="restaurants" element={<RestaurantsPageRedirect />}>
                <Route path=":restaurantId" element={<RestaurantsPage />}>
                  <Route index element={<Navigate to="menu" replace />} />
                  <Route path="menu" element={<MenuPage />} />
                  <Route path="reviews" element={<ReviewsPage />} />
                  <Route path="*" element={<Navigate to="menu" replace />} />
                </Route>
              </Route>
              <Route path="dish" element={<DishPageRedirect />}>
                <Route path=":dishId" element={<DishPage />} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeColorContextProvider>
    </Provider>
  );
}
