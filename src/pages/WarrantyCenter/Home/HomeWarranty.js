import "./HomeWarranty.css"
import { useState } from "react";
import { useForm } from "react-hook-form";
import WarrantyingItem from "../../../components/WarrantyCenter/WarrantyingItem/WarrantyingItem";
import { useEffect } from "react";
import Api from "../../../api/Api";

const HomeWarranty = () => {

    const [showForm, setShowForm] = useState(false);
    const [data, setData] = useState([])

    const showFormSend = () => {
        showForm ? setShowForm(false) : setShowForm(true);
    }

    const getData = async() => {
        const response = await Api.getGuaranteeingProduction();
        setData(response.data.productions)
        console.log(response)
    }

    useEffect(() => {
        getData();
    }, [])

    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        if (data.status === "success") {
            delete data.status;
            const response = await Api.guaranteeDone(data);
            console.log(response)
            if(response.status == 200) {
                showFormSend();
                getData();
            }
        } else {
            delete data.status;
            const response = await Api.guaranteeError(data);
            console.log(response)
            if(response.status == 200) {
                showFormSend();
                getData();
            }
        }
    }
    return (
        <div>
            <h1>Sản phẩm đang bảo hành</h1>
            <button className="button-send" onClick={showFormSend}>Gửi trả</button>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã sản phẩm</th>
                        <th>Dòng sản phẩm</th>
                        <th>Lô sản xuất</th>
                        <th>Cơ sở sản xuất</th>
                        <th>Ngày sản xuất</th>
                        <th>Ngày bảo hành</th>
                        <th>Đại lý</th>
                        <th>Khách hàng</th>
                        <th>Địa chỉ</th>
                        <th>Số điện thoại</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <WarrantyingItem key={index} props={item} index = {index + 1}/>
                    ))}
                </tbody>
            </table>
            {showForm && 
            <div className="back-form-send">
                <div className="modal-form-send"></div>
                <form className="form-send" onSubmit={handleSubmit(onSubmit)}>
                    <h2>Gửi trả sản phẩm bảo hành</h2>
                    <div className="send-container">
                        <label><b>Mã sản phẩm</b><br/>
                            <select className="select-production-id" placeholder="Chọn mã sản phẩm" {...register("production_id", {required: true})}>
                                {data.map((item, index) => (
                                    <option value={item.production_id} key = {index}>{item.production_id.slice(0, 10)}</option>
                                ))}
                            </select>
                            {errors.production_id && <span><br/>Bạn chưa chọn mã sản phẩm</span>}
                        </label>
                        <label><b>Ngày gửi trả</b><br/>
                            <input type="date" placeholder="Chọn ngày gửi trả" {...register("day_sent", {required: true})}/>
                            {errors.day_sent && <span><br/>Bạn chưa chọn ngày gửi trả</span>}
                        </label>
                        <label><b>Tình trạng</b><br/>
                        <select className="select-send" placeholder="Tình trạng" {...register("status", {required: true})}>
                            <option value="success">Gửi trả khách hàng</option>
                            <option value="error">Lỗi, trả về nhà máy</option>
                        </select>
                        {errors.status && <span><br/>{errors.status.message}</span>}
                </label>
                    </div>
                    <div className="send-footer">
                        <button className="exit-send" onClick={showFormSend}>Đóng</button>
                        <button className="save-send" type="submit">Gửi trả</button>
                    </div>
                </form>
            </div>
            }
        </div>
    )
}

export default HomeWarranty;