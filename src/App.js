import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Features from "./Component/Pages/Featues/Features";
import Community from "./Component/Pages/Community/Community";
import Blog from "./Component/Pages/Blog/Blog";
import Pricing from "./Component/Pages/Pricing/Pricing";
import Register from "./Component/Pages/Rgister/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/community" element={<Community />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
