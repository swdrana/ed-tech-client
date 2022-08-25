import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
      </Routes>
    </div>
  );
}

export default App;
