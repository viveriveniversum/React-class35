import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { FavContextProvider } from "./FavContext";
import Favorites from "./Favorites";
import ProductDetail from "./ProductDetail";
import Homepage from "./Homepage";

function App() {
  return (
    <FavContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </Router>
    </FavContextProvider>
  );
}

export default App;
