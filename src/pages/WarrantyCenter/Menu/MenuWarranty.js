import "./MenuWarranty.css"
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MenuOutlined, LeftOutlined } from '@ant-design/icons';
import User from "../../../Cookie/User";
import imageAvatar from "../../../assets/imageAvatar.jpg"

const MenuWarranty = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true);
    }

    const [checkLogout, setCheckLogout] = useState(false);
    const showCheckLogout = () => {
        checkLogout ? setCheckLogout(false) : setCheckLogout(true);
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
                            <Link to="/warranty/" onClick={handleMenu}>Sản phẩm đang bảo hành</Link>
                        </div>
                        <div>
                            <Link to="/warranty/warrantied" onClick={handleMenu}>Sản phẩm đã bảo hành</Link>
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

export default MenuWarranty;