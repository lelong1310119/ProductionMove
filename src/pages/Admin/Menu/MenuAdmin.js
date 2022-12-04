import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import './MenuAdmin.css'
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';
const Menu = () => {
    
    const [showMenu, setShowMenu] = useState(false);
    const handleMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    }
    return (
        <div>
            <div className="header-admin">
                <button className="button-menu" onClick={handleMenu}><MenuOutlined /></button>
            </div>
            {showMenu && 
            <div className="backmenu-admin">
                <div className="modalmenu-admin"></div>
                <nav className="menu-admin">
                    <button className="exit-menu" onClick={handleMenu}><LeftOutlined /></button>
                    <div className="list">
                        <div className="first-list">
                            <Link to="/" onClick={handleMenu}>Dòng sản phẩm</Link>
                        </div>
                        <div>
                            <Link to="/factory" onClick={handleMenu}>Cơ sở sản xuất</Link>
                        </div>
                        <div>
                            <Link to="/agent" onClick={handleMenu}>Đại lý phân phối</Link>
                        </div>
                        <div>
                            <Link to="/warranty" onClick={handleMenu}>Trung tâm bảo hành</Link>
                        </div>
                        <div>
                            <Link to="/product" onClick={handleMenu}>Trạng thái sản phẩm</Link>
                        </div>
                    </div>
                </nav>
            </div>
            }
        <Outlet />
        </div>
    )
}

export default Menu;