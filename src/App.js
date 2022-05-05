import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Pages/Header/Header';
import Home from './Component/Pages/Home/Home/Home';
import ProductDetail from './Component/Pages/Inventory/Inventory';
import Register from './Component/Pages/Login/Register/Register';
import RequireAuth from './Component/Pages/Login/RequireAuth/RequireAuth';
import ManageProducts from './Component/Pages/ManageProducts/ManageProducts';
import Order from './Component/Pages/Order/Order';
import Footer from './Component/Pages/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Login from './Component/Pages/Login/Login/Login';
import AddProduct from './Component/Pages/AddProduct/AddProduct';
import Inventory from './Component/Pages/Inventory/Inventory';


function App() {
  return (
    <div>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/product/:productId' element={<ProductDetail></ProductDetail>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/inventory/:productId" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="/addservice" element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <ManageProducts></ManageProducts>
          </RequireAuth>
        }></Route>
        <Route path="/orders" element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
        {/* <Route path="*" element={<NotFound></NotFound>}></Route> */}
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
