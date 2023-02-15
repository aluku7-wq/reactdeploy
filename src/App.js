import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
