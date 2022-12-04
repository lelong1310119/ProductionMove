import ProductLineItem from "../../../components/Admin/ProductLineItem/ProductLineItem";
import "./HomeAdmin.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const Home = () => {
    const [data, setData] = useState([])
    const postURL = "https://production-move-be.vercel.app/api/admins/create-production-line"
    const getURL = "https://production-move-be.vercel.app/api/product-lines"
    const onSubmit = data => { 
        let body = {
            name: data.name.trim(),
            price: data.price,
            time_guarantee: data.time_guarantee.trim(),
            configuration: {
                ram: data.ram.trim(),
                screen: data.screen.trim(),
                cpu: data.cpu.trim(),
                camera: data.camera.trim(),
                pin: data.pin.trim()
            }
        }
        axios.post(postURL, body).then((response) => {
            if (response.status == 200) {
                showFormProductline();
                axios.get(getURL).then((response) => {
                    setData(response.data.product_lines);
                });
            }
        });
    }   

    useEffect(() => {
        axios.get(getURL).then((response) => {
            setData(response.data.product_lines);
        });
    }, [])
    const [showForm, setShowForm] = useState(false)

    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const showFormProductline = () => {
        showForm ? setShowForm(false) : setShowForm(true);
    }

    return (
        <div>
            <h1>Quản lý dòng sản phẩm</h1>
            <button className="button-add-productline" onClick={showFormProductline}>Thêm mới</button>
            <div className="">
                <div className="container-home">
                    {data.map((item, index) => (
                        <ProductLineItem key={index} props={item}/>
                    ))}
                </div>
            </div>
            {showForm && 
            <div className="back-form-addproductline">
                <div className="modal-form-productline"></div>
                <form className="add-productline" onSubmit={handleSubmit(onSubmit)}>
                    <h2>Thêm dòng sản phẩm mới</h2>
                    <div className="add-productline-container">
                        <label><b>Tên sản phẩm</b><br/>
                            <input type="text" placeholder="Nhập tên dòng sản phẩm" {...register("name", {required: true})}/>
                            {errors.name && <span><br/>Bạn chưa nhập tên dòng sản phẩm</span>}
                        </label>
                        <label><b>RAM</b><br/>
                            <input type="text" placeholder="Nhập RAM" {...register("ram", {required: true})}/>
                            {errors.ram && <span><br/>Bạn chưa nhập RAM</span>}
                        </label>
                        <label><b>Màn hình</b><br/>
                            <input type="text" placeholder="Nhập kích thước màn hình" {...register("screen", {required: true})}/>
                            {errors.screen && <span><br/>Bạn chưa nhập kích thước màn hình</span>}
                        </label>
                        <label><b>CPU</b><br/>
                            <input type="text" placeholder="Nhập CPU" {...register("cpu", {required: true})}/>
                            {errors.cpu && <span><br/>Bạn chưa nhập CPU</span>}
                        </label>
                        <label><b>Camera</b><br/>
                            <input type="text" placeholder="Nhập camera" {...register("camera", {required: true})}/>
                            {errors.camera && <span><br/>Bạn chưa nhập Camera</span>}
                        </label>
                        <label><b>Dung lượng Pin</b><br/>
                            <input type="text" placeholder="Nhập dung lượng pin" {...register("pin", {required: true})}/>
                            {errors.pin && <span><br/>Bạn chưa nhập dung lượng pin</span>}
                        </label>
                        <label><b>Giá bán</b><br/>
                            <input type="text" placeholder="Nhập giá sản phẩm" {...register("price", {required: true})}/>
                            {errors.price && <span><br/>Bạn chưa nhập giá sản phẩm</span>}
                        </label>
                        <label><b>Thời gian bảo hành</b><br/>
                            <input type="text" placeholder="Nhập thời gian bảo hành" {...register("time_guarantee", {required: true})}/>
                            {errors.time_guarantee && <span><br/>Bạn chưa nhập thời gian bảo hành</span>}
                        </label>
                    </div>
                    <div className="add-productline-footer">
                        <button className="exit-addproductline" onClick={showFormProductline}>Đóng</button>
                        <button className="save-productline" type="submit">Lưu</button>
                    </div>
                </form>
            </div>
            }
        </div>
    )
}

export default Home;