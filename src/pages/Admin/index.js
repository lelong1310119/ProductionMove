import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agent from "./ManageAgent/Agent";
import Factory from "./ManageFactory/Factory";
import Product from "./ManageProduct/Product";
import Warranty from "./ManageWarranty/Warranty";
import MenuAdmin from "./Menu/MenuAdmin";
import HomeAdmin from "./Home/HomeAdmin";

const Admin = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MenuAdmin />}>
              <Route index element={<HomeAdmin />} />
              <Route path="factory" element={<Factory />} />
              <Route path="agent" element={<Agent />} />
              <Route path="warranty" element={<Warranty />} />
              <Route path="product" element={<Product />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
    
}

export default Admin;