import "./Warranty.css"
import WarrantyItem from "../../../components/Admin/WarrantyItem/WarrantyItem";
import { useState } from "react";

const Warranty = () => {
    const data = {
        id: "IP_SDJ",
        name: "Đông Tây", 
        phone: "0123456", 
        address: "Nghệ AN", 
        quantity_warrantying: 12345, 
        quantity_warrantied: 1232, 
        error_warranty:123
    }

    const [showForm, setShowForm] = useState(false);

    const showFormWarranty = () => {
        showForm ? setShowForm(false) : setShowForm(true);
    }
    const handleSubmit = () => {

    }

    return (
        <div>
            <h1>Quản lý trung tâm bảo hành</h1>
            <button className="button-add-warranty" onClick={showFormWarranty}>Thêm mới</button>
            <div className="container-warranty">
                <WarrantyItem key={"1"} props={data}/>
                <WarrantyItem key={"2"} props={data}/>
                <WarrantyItem key={"3"} props={data}/>
                <WarrantyItem key={"4"} props={data}/>
                <WarrantyItem key={"6"} props={data}/>
                <WarrantyItem key={"7"} props={data}/>
                <WarrantyItem key={"8"} props={data}/>
                <WarrantyItem key={"9"} props={data}/>
            </div>
            {showForm && 
            <div className="back-form-addwarranty">
                <div className="modal-form-warranty"></div>
                <form className="add-warranty">
                    <h2>Thêm trung tâm bảo hành</h2>
                    <div className="add-warranty-container">
                        <label><b>Tên trung tâm bảo hành</b><br/>
                            <input type="text" placeholder="Nhập tên trung tâm bảo hành"/>
                        </label>
                        <label><b>Địa chỉ</b><br/>
                            <input type="text" placeholder="Nhập địa chỉ"/>
                        </label>
                        <label><b>Số điện thoại</b><br/>
                            <input type="text" placeholder="Nhập số điện thoại"/>
                        </label>
                        <label><b>Tên tài khoản</b><br/>
                            <input type="text" placeholder="Nhập tên tài khoản"/>
                        </label>
                        <label><b>Mật khẩu</b><br/>
                            <input type="password" placeholder="Nhập mật khẩu"/>
                        </label>
                        <label><b>Nhập lại mật khẩu</b><br/>
                            <input type="password" placeholder="Nhập lại mật khẩu"/>
                        </label>
                    </div>
                    <div className="add-warranty-footer">
                        <button className="exit-addwarranty" onClick={showFormWarranty}>Đóng</button>
                        <button className="save-warranty" type="submit" onClick={handleSubmit}>Lưu</button>
                    </div>
                </form>
            </div>
            }
        </div>
    )
}

export default Warranty;