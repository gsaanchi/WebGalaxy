import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import PreviewPage from "./pages/PreviewPage";
import Page2 from "./pages/Page2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/PreviewPage" element={<PreviewPage />} />
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;
