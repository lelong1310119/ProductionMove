import "./SellProduct.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SellProductItem from "../../../components/Agent/SellProductItem/SellProductItem";
import Api from "../../../api/Api";

const SellProduct = () => {
    const [data, setData] = useState([]);

    const getData = async() => {
        const response = await Api.getOnSaleProduction();
        setData(response.data.productions)
    }
    const onSubmitSell = async (data) => {
        const response = await Api.soldProduction(data);
        console.log(response);
        if(response.status == 200) {
            showFormSellProduct();
            getData();
        }
    }   

    const onSubmitReturn = async (data) => {
        const response = await Api.sendProductionBackFactory(data);
        console.log(response);
        if(response.status == 200) {
            showFormReturnProduct();
            getData();

        }
    }   

    useEffect(() => {
        getData();
    }, [])

    const [showForm, setShowForm] = useState(false)
    const [showFormReturn, setShowFormReturn] = useState(false)

    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const showFormSellProduct = () => {
        showForm ? setShowForm(false) : setShowForm(true);
    }

    const showFormReturnProduct = () => {
        showFormReturn ? setShowFormReturn(false) : setShowFormReturn(true);
    }

    return (
        <div>
            <h1>Bán sản phẩm</h1>
            <button className="button-sell-product" onClick={showFormSellProduct}>Bán sản phẩm</button>
            <button className="button-return-product" onClick={showFormReturnProduct}>Gửi trả</button>
            <div className="">
                <div className="container-sell-product">
                    {data.map((item, index) => (
                        <SellProductItem key={index} props={item}/>
                    ))}
                </div>
            </div>
            {showForm && 
            <div className="back-form-sellproduct">
                <div className="modal-form-sellproduct"></div>
                <form className="sell-product" onSubmit={handleSubmit(onSubmitSell)}>
                    <h2>Bán sản phẩm</h2>
                    <div className="sell-product-container">
                        <label><b>Mã sản phẩm</b><br/>
                            <select className="select-production-id" placeholder="Chọn mã sản phẩm" {...register("production_id", {required: true})}>
                                {data.map((item, index) => (
                                    <option value={item.production_id} key = {index}>{item.production_id.slice(0, 10)}</option>
                                ))}
                            </select>
                            {errors.production_id && <span><br/>Bạn chưa chọn mã sản phẩm</span>}
                        </label>
                        <label><b>Tên khách hàng</b><br/>
                            <input type="text" placeholder="Nhập tên khách hàng" {...register("customer_fullname", {required: true})}/>
                            {errors.customer_fullname && <span><br/>Bạn chưa nhập tên khách hàng</span>}
                        </label>
                        <label><b>Địa chỉ</b><br/>
                            <input type="text" placeholder="Nhập địa chỉ khách hàng" {...register("customer_address", {required: true})}/>
                            {errors.customer_address && <span><br/>Bạn chưa nhập địa chỉ khách hàng</span>}
                        </label>
                        <label><b>Số điện thoại</b><br/>
                            <input type="text" placeholder="Nhập số điện thoại khách hàng" {...register("customer_phone_number", {required: true})}/>
                            {errors.customer_phone_number && <span><br/>Bạn chưa nhập số điện thoại</span>}
                        </label>
                        <label><b>Ngày bán</b><br/>
                            <input type="date" placeholder="Chọn ngày bán" {...register("sold_at", {required: true})}/>
                            {errors.sold_at && <span><br/>Bạn chưa chọn ngày bán</span>}
                        </label>
                    </div>
                    <div className="sell-product-footer">
                        <button className="exit-sellproduct" onClick={showFormSellProduct}>Đóng</button>
                        <button className="save-sellproduct" type="submit">Lưu</button>
                    </div>
                </form>
            </div>
            }
            {showFormReturn && 
            <div className="back-form-returnproduct">
                <div className="modal-form-returnproduct"></div>
                <form className="return-product" onSubmit={handleSubmit(onSubmitReturn)}>
                    <h2>Bán sản phẩm</h2>
                    <div className="return-product-container">
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
                    </div>
                    <div className="return-product-footer">
                        <button className="exit-returnproduct" onClick={showFormReturnProduct}>Đóng</button>
                        <button className="save-returnproduct" type="submit">Lưu</button>
                    </div>
                </form>
            </div>
            }
        </div>
    )
}

export default SellProduct;