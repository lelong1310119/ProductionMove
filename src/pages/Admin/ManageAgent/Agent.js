import "./Agent.css";
import AgentItem from "../../../components/Admin/AgentItem/AgentItem";
import { useState } from "react";

const Agent = () => {
    const data = {
        id: "IP_SDJ",
        name: "Đông Tây", 
        phone: "0123456", 
        address: "Nghệ AN", 
        quantity_received: 12345, 
        quantity_sold: 1232, 
        return_amount: 213
    }

    const [showForm, setShowForm] = useState(false);

    const showFormAgent = () => {
        showForm ? setShowForm(false) : setShowForm(true);
    }
    const handleSubmit = () => {

    }

    return (
        <div>
            <h1>Quản lý đại lý phân phối</h1>
            <button className="button-add-agent" onClick={showFormAgent}>Thêm mới</button>
            <div className="container-agent">
                <AgentItem key={"1"} props={data}/>
                <AgentItem key={"2"} props={data}/>
                <AgentItem key={"3"} props={data}/>
                <AgentItem key={"4"} props={data}/>
                <AgentItem key={"6"} props={data}/>
                <AgentItem key={"7"} props={data}/>
                <AgentItem key={"8"} props={data}/>
                <AgentItem key={"9"} props={data}/>
            </div>
            {showForm && 
            <div className="back-form-addagent">
                <div className="modal-form-agent"></div>
                <form className="add-agent">
                    <h2>Thêm đại lý phân phối</h2>
                    <div className="add-agent-container">
                        <label><b>Tên đại lý</b><br/>
                            <input type="text" placeholder="Nhập tên đại lý phân phối"/>
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
                    <div className="add-agent-footer">
                        <button className="exit-addagent" onClick={showFormAgent}>Đóng</button>
                        <button className="save-agent" type="submit" onClick={handleSubmit}>Lưu</button>
                    </div>
                </form>
            </div>
            }
        </div>
    )
}

export default Agent;