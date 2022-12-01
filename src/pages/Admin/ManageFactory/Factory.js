import "./Factory.css";
import FactoryItem from "../../../components/Admin/FactoryItem/FactoryItem";
import { useState } from "react";

const Factory = () => {
    const data = {
        id: "IP_SDJ",
        name: "Đông Tây", 
        phone: "0123456", 
        address: "Nghệ AN", 
        production_number: 12345, 
        distribution_quantity: 1232, 
        amount_warranty:123, 
        return_amount: 213, 
        error_product: 21
    }
    
    const [showForm, setShowForm] = useState(false);

    const showFormFactory = () => {
        showForm ? setShowForm(false) : setShowForm(true);
    }
    const handleSubmit = () => {

    }

    return (
        <div>
            <h1>Quản lý cơ sở sản xuất</h1>
            <button className="button-add-factory" onClick={showFormFactory}>Thêm mới</button>
            <div className="container-factory">
                <FactoryItem key={"1"} props={data}/>
                <FactoryItem key={"2"} props={data}/>
                <FactoryItem key={"3"} props={data}/>
                <FactoryItem key={"4"} props={data}/>
                <FactoryItem key={"6"} props={data}/>
                <FactoryItem key={"7"} props={data}/>
                <FactoryItem key={"8"} props={data}/>
                <FactoryItem key={"9"} props={data}/>
            </div>
            {showForm && 
            <div className="back-form-addfactory">
                <div className="modal-form-factory"></div>
                <form className="add-factory">
                    <h2>Thêm cơ sở sản xuất</h2>
                    <div className="add-factory-container">
                        <label><b>Tên cơ sở sản xuất</b><br/>
                            <input type="text" placeholder="Nhập tên cơ sở sản xuất"/>
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
                    <div className="add-factory-footer">
                        <button className="exit-addfactory" onClick={showFormFactory}>Đóng</button>
                        <button className="save-factory" type="submit" onClick={handleSubmit}>Lưu</button>
                    </div>
                </form>
            </div>
            }
        </div>
    )
}

export default Factory;