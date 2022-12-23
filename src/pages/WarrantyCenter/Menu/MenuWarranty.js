import "./MenuWarranty.css"
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';
import User from "../../../Cookie/User";

const MenuWarranty = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    }

    const navigate = useNavigate();
    const handleLogout = () => {
        User.removeCookie();
        navigate("/");
    }

    useEffect( () => {
        console.log(User.getCookieName())
        console.log(User.getCookieData())
    }, [])

    return (
        <div>
            <div className="header-warranty">
                <button className="button-menu-warranty" onClick={handleMenu}><MenuOutlined /></button>
                <button className="button-logout" onClick={handleLogout}>Đăng xuất</button>
            </div>
            {showMenu && 
            <div className="backmenu-warranty">
                <div className="modalmenu-warranty"></div>
                <nav className="menu-warranty">
                    <button className="exit-menu-warranty" onClick={handleMenu}><LeftOutlined /></button>
                    <div className="list-warranty">
                        <div className="first-list">
                            <Link to="/warranty/" onClick={handleMenu}>Sản phẩm đang bảo hành</Link>
                        </div>
                        <div>
                            <Link to="/warranty/warrantied" onClick={handleMenu}>Sản phẩm đã bảo hành</Link>
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