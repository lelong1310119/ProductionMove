import "./MenuWarranty.css"
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';

const MenuWarranty = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    }
    return (
        <div>
            <div className="header-warranty">
                <button className="button-menu-warranty" onClick={handleMenu}><MenuOutlined /></button>
            </div>
            {showMenu && 
            <div className="backmenu-warranty">
                <div className="modalmenu-warranty"></div>
                <nav className="menu-warranty">
                    <button className="exit-menu-warranty" onClick={handleMenu}><LeftOutlined /></button>
                    <div className="list-warranty">
                        <div>
                            <Link to="/" onClick={handleMenu}>Sản phẩm đang bảo hành</Link>
                        </div>
                        <div>
                            <Link to="/warrantied" onClick={handleMenu}>Sản phẩm đã bảo hành</Link>
                        </div>
                    </div>
                </nav>
            </div>
            }
        <Outlet />
        </div>
    )
}

export default MenuWarranty;