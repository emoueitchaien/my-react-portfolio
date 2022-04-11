import "./App.css";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Work from "./screens/Work";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<Home />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
