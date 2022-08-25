import { Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Home from './components/pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
