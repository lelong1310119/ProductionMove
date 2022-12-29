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
    const [filterData, setFilterData] = useState([])
    const [productline, setProductline] = useState([]);
    const [factory, setFactory] = useState([])
    const [filterProductline, setFilterProductline] = useState("all");
    const [filterFactory, setFilterFactory] = useState("all")
    const [filterwarrantyCenter, setFilterWarrantyCenter] = useState("all");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const getData = async() => {
        try {
            const response = await Api.getSoldProduction();
            setData(response.data.productions)
            setFilterData(response.data.productions)
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

    const getProductline = async () => {
        const response = await Api.getProductline();
        if (response.status === 200) {
            setProductline(response.data.product_lines);
        }
    }

    const getFactory = async () => {
        const response = await Api.getFactory();
        if (response.status === 200) {
            setFactory(response.data.manufacture_factories);
        }
    }

    const handleProductline = (e) => {
        setFilterProductline(e.target.value)
    }

    const handleFactory = (e) => {
        setFilterFactory(e.target.value)
    }

    const handleWarrantyCenter = (e) => {
        setFilterWarrantyCenter(e.target.value)
    }

    useEffect(() => {
        let productions = data;
        if (filterProductline != "all") {
            productions = productions.filter(item => item.product_line_name == filterProductline);
        }
        if (filterFactory != "all") {
            productions = productions.filter(item => item.manufacture_factory_name == filterFactory);
        }
        if (filterwarrantyCenter != "all") {
            productions = productions.filter(item => item.warranty_center_name == filterwarrantyCenter);
        }
        setFilterData(productions);
    },[filterProductline, filterFactory, filterwarrantyCenter])

    useEffect(() => {
        getWarrantyCenter();
        getData();
        getFactory();
        getProductline();
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
            <div className="filter-admin">
                <label><b>Dòng sản phẩm</b><br/>
                    <select onChange={handleProductline}>
                        <option value="all">Tất cả</option>
                        {productline.map((item, index) => (
                            <option value={item.name} key = {index}>{item.name}</option>
                        ))}
                    </select>
                </label>
                <label><b>Cơ sở sản xuất</b><br/>
                    <select onChange={handleFactory}>
                        <option value="all">Tất cả</option>
                        {factory.map((item, index) => (
                            <option value={item.name} key = {index}>{item.name}</option>
                        ))}
                    </select>
                </label>
                <label><b>Trung tâm bảo hành</b><br/>
                    <select onChange={handleWarrantyCenter}>
                        <option value="all">Tất cả</option>
                        {warrantyCenter.map((item, index) => (
                            <option value={item.name} key = {index}>{item.name}</option>
                        ))}
                    </select>
                </label>
            </div>
            <table>
                <thead>
                    <tr>
                        <th style={{width: "22px"}}>STT</th>
                        <th style={{width: "100px"}}>Mã sản phẩm</th>
                        <th style={{width: "170px"}}>Dòng sản phẩm</th>
                        <th style={{width: "100px"}}>Lô sản xuất</th>
                        <th style={{width: "90px"}}>Cơ sở sản xuất</th>
                        <th style={{width: "100px"}}>Ngày sản xuất</th>
                        <th style={{width: "120px"}}>Tình trạng</th>
                        <th style={{width: "100px"}}>Ngày bán</th>
                        <th style={{width: "90px"}}>TT Bảo hành</th>
                        <th style={{width: "120px"}}>Khách hàng</th>
                        <th style={{width: "100px"}}>Địa chỉ</th>
                        <th style={{width: "100px"}}>Số điện thoại</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.map((item, index) => (
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