import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import Slider from './components/Slider';
import Home from './components/Home';
import About from './components/About';
import ProductDetails from './components/ProductDetails';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='product/:productId' element={<ProductDetails />} />
      </Routes>
    </div>
  );

}

export default App;
