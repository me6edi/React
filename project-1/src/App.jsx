import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import ProductPage from "./pages/productPage.jsx";
import ProfilePage from "./pages/profilePage.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route
            path="/profile/:facebookID/:YouTubeID"
            element={<ProfilePage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
