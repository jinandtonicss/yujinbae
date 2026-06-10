import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PortfolioSlides from "./pages/PortfolioSlides";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio-slides" element={<PortfolioSlides />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
