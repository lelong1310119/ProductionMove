import "./Factory.css";
import FactoryItem from "../../../components/Admin/FactoryItem/FactoryItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Factory = () => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const [data, setData] = useState([])
    const postURL = "https://production-move-be.vercel.app/api/admins/create-manufacture-factory"
    const getURL = "https://production-move-be.vercel.app/api/manufacture-factories"
    const [showForm, setShowForm] = useState(false);

    // submit add factory
    const onSubmit = data => { 
        if (data.password !== data.repass){
            setError("repass", {message: "Mật khẩu không trùng khớp"})
        } else {
            delete data.repass;
            axios.post(postURL, data).then((response) => {
                if (response.status == 200) {
                    showFormFactory();
                    alert(`Thêm thành công cơ sở sản xuất
                    Tên: ${data.name}
                    Mã: ${response.data.manufacture_factory_id.slice(0,10)}`)
                    axios.get(getURL).then((response) => {
                        setData(response.data.manufacture_factories);
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
            setData(response.data.manufacture_factories);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    const showFormFactory = () => {
        showForm ? setShowForm(false) : setShowForm(true);
    }

    return (
        <div className="container">
            <h1>Quản lý cơ sở sản xuất</h1>
            <div className="button-container">
                <button style={{color: "#0F62FE"}} className="button-add-factory" onClick={showFormFactory}>Thêm mới</button>
            </div>
            <div className="container-item">
                {data.map((item, index) => (
                    <FactoryItem key={index} props={item}/>
                ))}
            </div>
            {showForm && 
            <div className="back-form">
                <div className="modal-form"></div>
                <form className="add-factory" onSubmit={handleSubmit(onSubmit)}>
                    <h2>Thêm cơ sở sản xuất</h2>
                    <div className="form-container">
                        <label><b>Tên cơ sở sản xuất</b><br/>
                            <input type="text" placeholder="Nhập tên cơ sở sản xuất" {...register("name", {required: true})}/>
                            {errors.name && <span><br/>Bạn chưa nhập tên cơ sở sản xuất</span>}
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
                        <button className="exit-addfactory" onClick={showFormFactory}>Đóng</button>
                        <button className="save-factory" type="submit">Lưu</button>
                    </div>
                </form>
            </div>
            }
        </div>
    )
}

export default Factory;