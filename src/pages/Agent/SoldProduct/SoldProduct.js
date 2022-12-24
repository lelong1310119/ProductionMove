import "./SoldProduct.css"
import { useEffect, useState } from "react";
import SoldProductItem from "../../../components/Agent/SoldProductItem/SoldProductItem";
import { useForm } from "react-hook-form";
import Api from "../../../api/Api";

const SoldProduct = () => {
    const [data, setData] = useState([])
    const [warrantyCenter, setWarrantyCenter] = useState([]);
    const [productions, setProductions] = useState([]);
    const [showForm, setShowForm] = useState(false)
    const { register, handleSubmit, setError, formState: { errors } } = useForm();

    const getData = async() => {
        try {
            const response = await Api.getSoldProduction();
            setData(response.data.productions)
        } catch(err) {
            console.log(err);
        }
    }

    const getWarrantyCenter = async() => {
        try {
            const response = await Api.getWarrantyCenter();
            setWarrantyCenter(response.data.warranty_centers)
        } catch(err) {
            console.log(err);
        }
    }

    const getProduction = async() => {
        try {
            const response = await Api.getSoldProduction();
            const data = response.data.productions;
            const productionStatus = data.filter(item => {
                if (item.status === "GUARANTEEING" || item.status === "GUARANTEE_EXPIRED" || item.status === "ERROR_NEED_BACK_TO_MANUFACTURE_FACTORY") return false;
                return true;
            })
            console.log(data);
            setProductions(productionStatus);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getWarrantyCenter();
        getData();
        getProduction();
    }, [])

    const showFormWarranty = () => {
        showForm ? setShowForm(false) : setShowForm(true);
    }

    // submit guarantee
    const onSubmit = async (data) => {
        try {
            const response = await Api.guaranteeProduction(data);
            console.log(response);
            if(response.status == 200) {
                showFormWarranty();
                alert(`Đã gửi bảo hành sản phẩm 
                Mã sản phẩm: ${data.production_id.slice(0,10)}`)
                getData();
                getProduction();
            }
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="container">
            <h1>Sản phẩm đã bán</h1>
            <div className="button-container">
                <button className="button-warranty-product" onClick={showFormWarranty}>Bảo hành/Triệu hồi</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã sản phẩm</th>
                        <th>Dòng sản phẩm</th>
                        <th>Lô sản xuất</th>
                        <th>Cơ sở sản xuất</th>
                        <th>Ngày sản xuất</th>
                        <th>Tình trạng</th>
                        <th>Ngày bán</th>
                        <th>TT Bảo hành</th>
                        <th>Khách hàng</th>
                        <th>Địa chỉ</th>
                        <th>Số điện thoại</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <SoldProductItem key={index} props={item} index = {index + 1}/>
                    ))}
                </tbody>
            </table>
            {showForm && 
            <div className="back-form">
                <div className="modal-form"></div>
                <form className="warranty-product" onSubmit={handleSubmit(onSubmit)}>
                    <h2>Bảo hành và triệu hồi sản phẩm</h2>
                    <div className="form-container">
                        <label><b>Mã sản phẩm</b><br/>
                            <select className="select-production-id" placeholder="Chọn mã sản phẩm" {...register("production_id", {required: true})}>
                                {productions.map((item, index) => (
                                    <option value={item.production_id} key = {index}>{item.production_id.slice(0, 10)}</option>
                                ))}
                            </select>
                            {errors.production_id && <span><br/>Bạn chưa chọn mã sản phẩm</span>}
                        </label>
                        <label><b>Trung tâm bảo hành</b><br/>
                            <select className="select-warranty-center" placeholder="Chọn trung tâm bảo hành" {...register("warranty_center_id", {required: true})}>
                                {warrantyCenter.map((item, index) => (
                                    <option value={item.warranty_center_id} key = {index}>{item.name}</option>
                                ))}
                            </select>
                            {errors.warranty_center_id && <span><br/>Bạn chưa chọn TT bảo hành</span>}
                        </label>
                        <label><b>Ngày gửi bảo hành</b><br/>
                            <input type="date" placeholder="Chọn ngày gửi bảo hành" {...register("day_sent", {required: true})}/>
                            {errors.day_sent && <span><br/>Bạn chưa chọn ngày gửi bảo hành</span>}
                        </label>
                    </div>
                    <div className="form-footer">
                        <button className="exit-warrantyproduct" onClick={showFormWarranty}>Đóng</button>
                        <button className="save-warrantyproduct" type="submit">Lưu</button>
                    </div>
                </form>
            </div>
            }
        </div>
    )
}

export default SoldProduct;