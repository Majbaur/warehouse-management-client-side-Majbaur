import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import AddProduct from './Components/Management/AddProducts/AddProduct';
import Blog from './Components/Blog/Blog/Blog';
import MyItems from './Components/User/MyItems/MyItems';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import FruitDetailes from './Components/Products/FruitsDetails/FruitDetailes/FruitDetailes';
import Management from './Components/Management/Management/Management';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <FruitDetailes></FruitDetailes>
          </RequireAuth>
        }></Route>
        <Route path='/manageInventories' element={<Management></Management>}></Route>
        <Route path='/newItem' element={<AddProduct></AddProduct>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/myitems" element={
          <RequireAuth>
            <MyItems>
            </MyItems>
          </RequireAuth>
        }></Route>

        <Route></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
