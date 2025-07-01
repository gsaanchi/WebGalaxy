import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import PreviewPage from "./pages/PreviewPage";
import Page2 from "./pages/Page2";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageTemplate from "./pages/PageTemplate";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/PreviewPage" element={<PreviewPage />} />
        <Route path="/Page2" element={<Page2 />} />
        {/* <Route path="/" element={<Signup />} /> */}
        <Route path="/" element={<Landing />} />
        <Route path="/preview/:index" element={<PageTemplate/>}/>
      </Routes>
    </Router>
  );
}

export default App;