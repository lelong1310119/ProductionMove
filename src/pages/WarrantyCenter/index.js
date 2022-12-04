import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuWarranty from "./Menu/MenuWarranty";
import HomeWarranty from "./Home/HomeWarranty";
import Warrantied from "./Warrantied/Warrantied";

const WarrantyCenter = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MenuWarranty />}>
              <Route index element={<HomeWarranty />} />
              <Route path="warrantied" element={<Warrantied />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
    
}

export default WarrantyCenter;