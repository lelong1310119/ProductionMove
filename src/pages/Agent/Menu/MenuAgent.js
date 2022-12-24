import "./MenuAgent.css"
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import User from "../../../Cookie/User";
import imageAvatar from "../../../assets/imageAvatar.jpg"


const MenuAgent = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [checkLogout, setCheckLogout] = useState(false);
    const navigate = useNavigate();

    const showCheckLogout = () => {
        checkLogout ? setCheckLogout(false) : setCheckLogout(true);
    }

    const handleMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true);
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
                            <Link to="/agent/" onClick={handleMenu}>Bán sản phẩm</Link>
                        </div>
                        <div>
                            <Link to="/agent/sold" onClick={handleMenu}>Sản phẩm đã bán</Link>
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

export default MenuAgent;