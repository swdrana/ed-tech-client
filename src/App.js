import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Login from "./components/pages/auth/Login";
import Signup from "./components/pages/auth/Signup";
import Blog from "./components/pages/Blog";
import Home from "./components/pages/Home";
import Footer from "./components/shared/Footer";
import Navber from "./components/shared/Navber";

function App() {
  return (
    <div>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
