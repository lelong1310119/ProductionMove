
import './App.css';
import Login from './pages/Login';
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import MenuAdmin from './pages/Admin/Menu/MenuAdmin';
import HomeAdmin from './pages/Admin/Home/HomeAdmin';
import Factory from './pages/Admin/ManageFactory/Factory';
import Agent from './pages/Admin/ManageAgent/Agent';
import Warranty from './pages/Admin/ManageWarranty/Warranty';
import Product from './pages/Admin/ManageProduct/Product';
import MenuWarranty from './pages/WarrantyCenter/Menu/MenuWarranty';
import HomeWarranty from './pages/WarrantyCenter/Home/HomeWarranty';
import Warrantied from './pages/WarrantyCenter/Warrantied/Warrantied';
import MenuFactory from './pages/ManufactureFactory/Menu/MenuFactory';
import ProductionIot from './pages/ManufactureFactory/Home/ProductionIot';
import ErrorProduct from './pages/ManufactureFactory/ErrorProduct/ErrorProduct';
import ReturnProduct from './pages/ManufactureFactory/ReturnProduct/ReturnProduct';
import SellProduct from './pages/Agent/SellProduct/SellProduct';
import SoldProduct from './pages/Agent/SoldProduct/SoldProduct';
import MenuAgent from './pages/Agent/Menu/MenuAgent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route path="/admin/" element={<MenuAdmin />}>
          <Route index element={<HomeAdmin />} />
          <Route path="factory" element={<Factory />} />
          <Route path="agent" element={<Agent />} />
          <Route path="warranty" element={<Warranty />} />
          <Route path="product" element={<Product />} />
        </Route>
        <Route path="/factory/" element={<MenuFactory/>}>
          <Route index element={<ProductionIot />} />
          <Route path="error" element={<ErrorProduct/>} />
          <Route path="return" element={<ReturnProduct />} />
        </Route>
        <Route path="/agent/" element={<MenuAgent />}>
          <Route index element={<SellProduct />} />
          <Route path="sold" element={<SoldProduct />} />
        </Route>
        <Route path="/warranty/" element={<MenuWarranty />}>
          <Route index element={<HomeWarranty />} />
          <Route path="warrantied" element={<Warrantied />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;