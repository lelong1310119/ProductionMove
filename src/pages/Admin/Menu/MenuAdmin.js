import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import './MenuAdmin.css'
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import User from "../../../Cookie/User";
import imageAvatar from "../../../assets/imageAvatar.jpg"

const MenuAdmin = () => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const [checkLogout, setCheckLogout] = useState(false);
    
    const handleMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    }

    const showCheckLogout = () => {
        checkLogout ? setCheckLogout(false) : setCheckLogout(true);
    }

    const handleLogout = () => {
        User.removeCookie();
        navigate("/");
    }

    return (
        <div>
            <div className="header">
                <button className="button-menu" onClick={handleMenu}><MenuOutlined /></button>
                <div className="user-info">
                    <p>{User.getCookieName()}</p>
                    <img src={imageAvatar}  className="image-avatar"/>
                </div>
                <button className="button-logout" onClick={showCheckLogout}>Đăng xuất</button>
            </div>
            {showMenu && 
            <div className="back-menu">
                <div className="modal-menu"></div>
                <nav className="menu">
                    <button className="exit-menu" onClick={handleMenu}><LeftOutlined /></button>
                    <div className="list-menu">
                        <div className="first-list">
                            <Link to="/admin/" onClick={handleMenu}>Dòng sản phẩm</Link>
                        </div>
                        <div>
                            <Link to="/admin/factory" onClick={handleMenu}>Cơ sở sản xuất</Link>
                        </div>
                        <div>
                            <Link to="/admin/agent" onClick={handleMenu}>Đại lý phân phối</Link>
                        </div>
                        <div>
                            <Link to="/admin/warranty" onClick={handleMenu}>Trung tâm bảo hành</Link>
                        </div>
                        <div>
                            <Link to="/admin/product" onClick={handleMenu}>Trạng thái sản phẩm</Link>
                        </div>
                    </div>
                </nav>
            </div>
            }
            {checkLogout && 
            <div className="back-form">
                <div className="modal-form"></div>
                <div className="container-logout">
                    <p>Bạn muốn đăng xuất ?</p>
                    <div className="form-footer">
                        <button className="confirm-logout" onClick={handleLogout}>Đồng ý</button>
                        <button className="exit-logout" onClick={showCheckLogout}>Hủy bỏ</button>
                    </div>
                </div>
            </div>
            }
        <Outlet />
        </div>
    )
}

export default MenuAdmin;