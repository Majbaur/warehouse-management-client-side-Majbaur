import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Pages/Header/Header';
import Home from './Component/Pages/Home/Home/Home';
import ServiceDetail from './Component/Pages/ServiceDetail/ServiceDetail';
import Register from './Component/Pages/Login/Register/Register';
import RequireAuth from './Component/Pages/Login/RequireAuth/RequireAuth';
import AddService from './Component/Pages/AddService/AddService';
import ManageServices from './Component/Pages/ManageServices/ManageServices';
import Order from './Component/Pages/Order/Order';
import Footer from './Component/Pages/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Login from './Component/Pages/Login/Login/Login';
import Checkout from './Component/Pages/Checkout/Checkout';


function App() {
  return (
    <div>
     <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/checkout/:serviceId" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="/addservice" element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <ManageServices></ManageServices>
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
