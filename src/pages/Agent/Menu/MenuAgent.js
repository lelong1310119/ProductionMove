import "./MenuAgent.css"
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import User from "../../../Cookie/User";

const MenuAgent = () => {
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
            <div className="header-agent">
                <button className="button-menu-agent" onClick={handleMenu}><MenuOutlined /></button>
                <button className="button-logout" onClick={handleLogout}>Đăng xuất</button>
            </div>
            {showMenu && 
            <div className="backmenu-agent">
                <div className="modalmenu-agent"></div>
                <nav className="menu-agent">
                    <button className="exit-menu-agent" onClick={handleMenu}><LeftOutlined /></button>
                    <div className="list-agent">
                        <div className="first-list">
                            <Link to="/agent/" onClick={handleMenu}>Bán sản phẩm</Link>
                        </div>
                        <div>
                            <Link to="/agent/sold" onClick={handleMenu}>Sản phẩm đã bán</Link>
                        </div>
                    </div>
                </nav>
            </div>
            }
        <Outlet />
        </div>
    )
}

export default MenuAgent;