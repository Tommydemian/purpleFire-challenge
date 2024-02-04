import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage/ProductDetailsPage";
import { MobileProvider } from "./contexts/MobileContext";

function App() {
  return (
    <MobileProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
        </Routes>
      </Router>
    </MobileProvider>
  );
}

export default App;
