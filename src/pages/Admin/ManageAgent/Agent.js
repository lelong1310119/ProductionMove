import "./Agent.css";
import AgentItem from "../../../components/Admin/AgentItem/AgentItem";
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Agent = () => {
    const postURL = "https://production-move-be.vercel.app/api/admins/create-distribution-agent"
    const getURL = "https://production-move-be.vercel.app/api/distribution-agents"
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const [data, setData] = useState([])
    const [showForm, setShowForm] = useState(false);

    // submit add agent
    const onSubmit = data => { 
        if (data.password !== data.repass){
            setError("repass", {message: "Mật khẩu không trùng khớp"})
        } else {
            delete data.repass;
            axios.post(postURL, data).then((response) => {
                if (response.status == 200) {
                    showFormAgent();
                    alert(`Thêm thành công đại lý phân phối
                    Tên: ${data.name}
                    Mã: ${response.data.distribution_agent_id.slice(0,10)}`)
                    axios.get(getURL).then((response) => {
                        setData(response.data.distribution_agents);
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
        }   
    }

    useEffect(() => {
        axios.get(getURL).then((response) => {
            setData(response.data.distribution_agents);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    const showFormAgent = () => {
        showForm ? setShowForm(false) : setShowForm(true);
    }

    return (
        <div className="container">
            <h1>Quản lý đại lý phân phối</h1>
            <div className="button-container">
                <button style={{color: "#0F62FE"}} className="button-add-agent" onClick={showFormAgent}>Thêm mới</button>
            </div>
            <div className="container-item">
                {data.map((item, index) => (
                    <AgentItem key={index} props={item}/>
                ))}
            </div>
            {showForm && 
            <div className="back-form">
                <div className="modal-form"></div>
                <form className="add-agent" onSubmit={handleSubmit(onSubmit)}>
                    <h2>Thêm đại lý phân phối</h2>
                    <div className="form-container">
                        <label><b>Tên đại lý</b><br/>
                            <input type="text" placeholder="Nhập tên đại lý phân phối" {...register("name", {required: true})}/>
                            {errors.name && <span><br/>Bạn chưa nhập tên đại lý</span>}
                        </label>
                        <label><b>Tên tài khoản</b><br/>
                            <input type="text" placeholder="Nhập tên tài khoản" {...register("username", {required: true})}/>
                            {errors.username && <span><br/>Bạn chưa nhập tên tài khoản</span>}
                        </label>
                        <label><b>Địa chỉ</b><br/>
                            <input type="text" placeholder="Nhập địa chỉ" {...register("address", {required: true})}/>
                            {errors.address && <span><br/>Bạn chưa nhập địa chỉ</span>}
                        </label>
                        <label><b>Mật khẩu</b><br/>
                            <input type="password" placeholder="Nhập mật khẩu" {...register("password", {required: true})}/>
                            {errors.password && <span><br/>Bạn chưa nhập mật khẩu</span>}
                        </label>
                        <label><b>Số điện thoại</b><br/>
                            <input type="text" placeholder="Nhập số điện thoại" {...register("phone_number", {required: true})}/>
                            {errors.phone_number && <span><br/>Bạn chưa nhập số điện thoại</span>}
                        </label>
                        <label><b>Nhập lại mật khẩu</b><br/>
                            <input type="password" placeholder="Nhập lại mật khẩu" {...register("repass", {required: true})}/>
                            {errors.repass && <span><br/>{errors.repass.message}</span>}
                        </label>
                    </div>
                    <div className="form-footer">
                        <button className="exit-addagent" onClick={showFormAgent}>Đóng</button>
                        <button className="save-agent" type="submit">Lưu</button>
                    </div>
                </form>
            </div>
            }
        </div>
    )
}

export default Agent;