import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import './MenuFactory.css'
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import User from "../../../Cookie/User";

const MenuFactory = () => {
    
    const [showMenu, setShowMenu] = useState(false);
    const handleMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    }

    const navigate = useNavigate();
    const handleLogout = () => {
        User.removeCookie();
        navigate("/");
    }

    return (
        <div>
            <div className="header-factory">
                <button className="button-menu" onClick={handleMenu}><MenuOutlined /></button>
                <button className="button-logout" onClick={handleLogout}>Đăng xuất</button>
            </div>
            {showMenu && 
            <div className="backmenu-factory">
                <div className="modalmenu-factory"></div>
                <nav className="menu-factory">
                    <button className="exit-menu" onClick={handleMenu}><LeftOutlined /></button>
                    <div className="list">
                        <div className="first-list">
                            <Link to="/factory/" onClick={handleMenu}>Lô sản phẩm</Link>
                        </div>
                        <div>
                            <Link to="/factory/error" onClick={handleMenu}>Sản phẩm lỗi</Link>
                        </div>
                        <div>
                            <Link to="/factory/return" onClick={handleMenu}>Sản phẩm bị trả về</Link>
                        </div>
                    </div>
                </nav>
            </div>
            }
        <Outlet />
        </div>
    )
}

export default MenuFactory;