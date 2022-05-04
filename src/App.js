import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Pages/Footer/Footer.js';
import Header from './Component/Pages/Header/Header';
import Home from './Component/Pages/Home/Home/Home';




function App() {
  return (
    <div>
     <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
