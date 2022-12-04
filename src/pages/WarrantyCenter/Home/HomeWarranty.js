import "./HomeWarranty.css"
import { useState } from "react";
import { useForm } from "react-hook-form";

const HomeWarranty = () => {

    const [showForm, setShowForm] = useState(false);

    const showFormSend = () => {
        showForm ? setShowForm(false) : setShowForm(true);
    }

    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const onSubmit = data => { 
        console.log(data);
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
                </tbody>
            </table>
            {showForm && 
            <div className="back-form-send">
                <div className="modal-form-send"></div>
                <form className="form-send" onSubmit={handleSubmit(onSubmit)}>
                    <h2>Gửi trả sản phẩm bảo hành</h2>
                    <div className="send-container">
                        <label><b>Mã sản phẩm</b><br/>
                            <input type="text" placeholder="Nhập mã sản phẩm" {...register("id", {required: true})}/>
                            {errors.id && <span><br/>Bạn chưa nhập mã sản phẩm</span>}
                        </label>
                        <label><b>Ngày gửi trả</b><br/>
                            <input type="text" placeholder="Nhập ngày gửi trả" {...register("date", {required: true})}/>
                            {errors.date && <span><br/>Bạn chưa nhập ngày gửi trả</span>}
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