import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agent from "./ManageAgent/Agent";
import Factory from "./ManageFactory/Factory";
import Product from "./ManageProduct/Product";
import Warranty from "./ManageWarranty/Warranty";
import Menu from "./Menu/Menu";
import Home from "./Home/Home";

const Admin = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />}>
              <Route index element={<Home />} />
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