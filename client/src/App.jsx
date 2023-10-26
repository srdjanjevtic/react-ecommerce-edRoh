import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
