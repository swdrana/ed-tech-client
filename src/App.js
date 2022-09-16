import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Blog from "./pages/blog/Blog";
import Footer from "./components/shared/Footer";
import Navber from "./components/shared/Navber";
import AddItem from "./pages/addItem/AddItem";
import Home from "./pages/home/Home";
import RequireAuth from "./pages/auth/RequireAuth";
import RequireNonAuth from "./pages/auth/RequireNonAuth";

function App() {
  return (
    <div>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add-item"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        />
        <Route
          path="login"
          element={
            <RequireNonAuth>
              <Login />
            </RequireNonAuth>
          }
        />
        <Route
          path="signup"
          element={
            <RequireNonAuth>
              <Signup />
            </RequireNonAuth>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
