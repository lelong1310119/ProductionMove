import "./ProductionIot.css"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Api from "../../../api/Api";
import ProductionIotItem from "../../../components/ManufactureFactory/ProductionIotItem/ProductionIotItem";

const ProductionIot = () => {
    const [data, setData] = useState([])
    const [productline, setProductline] = useState([])
    const [productIot, setProductIot] = useState([])
    const [agent, setAgent] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [showFormExport, setShowFormExport] = useState(false)
    const { register, handleSubmit, setError, formState: { errors } } = useForm();

    const showFormProductIot = () => {
        showForm ? setShowForm(false) : setShowForm(true);
    }
    const showFormExportProductIot = () => {
        showFormExport ? setShowFormExport(false) : setShowFormExport(true);
    }

    const getData = async() => {
        try {
            const response = await Api.getProductionIot();
            const data = response.data.production_lots;
            const productiots = data.filter( item => !item.distribution_agent_name)
            console.log("getProductionIot", data)
            setData(data)
            setProductIot(productiots);
        } catch(err) {
            console.log(err);
        }
    }

    const getAgent =  async () => {
        try {
            const response = await Api.getAgent();
            setAgent(response.data.distribution_agents);
            console.log(response)
        } catch(err) {
            console.log(err);
        }
    }

    const getProductline = async () => {
        try {
            const response = await Api.getProductline();
            setProductline(response.data.product_lines);
            console.log(response)
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProductline();
        getData();
        getAgent();
        console.log(productline)
    }, [])

    // add productionIot
    const onSubmit = async(data) => {
        try {
            data.production_number = Number(data.production_number)
            const response = await Api.createProductionIot(data);
            console.log(response);
            if(response.status == 200) {
                showFormProductIot();
                alert(`Đã thêm lô sản phẩm mới
                Mã lô: ${response.data.product_lot_id.slice(0,10)}`)
                getData();
            }
        } catch(err) {
            console.log(err);
        }
    }

    // export production Iot
    const onSubmitExport = async(data) => {
        try {
            console.log(data);
            const response = await Api.exportProductionIot(data);
            console.log(response);
            if(response.status == 200) {
                showFormExportProductIot();
                alert(`Đã xuất lô đến đại lý
                Mã lô: ${data.product_lot_id.slice(0,10)}`)
                getData();
            }
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="container">
            <h1>Quản lý lô sản phẩm</h1>
            <div className="button-container">
                <button className="button" onClick={showFormProductIot}>Thêm mới</button>
                <button className="button" onClick={showFormExportProductIot}>Xuất kho</button>
            </div>
            <div className="">
                <div className="container-item">
                    {data.map((item, index) => (
                        <ProductionIotItem key={index} props={item}/>
                    ))}
                </div>
            </div>
            {showForm && 
            <div className="back-form">
                <div className="modal-form"></div>
                <form className="add-productioniot" onSubmit={handleSubmit(onSubmit)}>
                    <h2>Thêm lô sản phẩm mới</h2>
                    <div className="form-container">
                        <label><b>Dòng sản phẩm</b><br/>
                            <select className="select-productline" placeholder="Chọn dòng sản phẩm" {...register("product_line_id", {required: true})}>
                                {productline.map((item, index) => (
                                    <option value={item.product_line_id} key = {index}>{item.name}</option>
                                ))}
                            </select>
                            {errors.product_line_id && <span><br/>Bạn chưa chọn dòng sản phẩm</span>}
                        </label>
                        <label><b>Số lượng sản phẩm</b><br/>
                            <input type="text" placeholder="Nhập số lượng sản phẩm" {...register("production_number", {required: true})}/>
                            {errors.production_number && <span><br/>Bạn chưa nhập số lượng</span>}
                        </label>
                        <label><b>Ngày sản xuất</b><br/>
                            <input type="date" placeholder="Chọn ngày sản xuất" {...register("production_time", {required: true})}/>
                            {errors.production_time && <span><br/>Bạn chưa chọn ngày sản xuất</span>}
                        </label>
                    </div>
                    <div className="form-footer">
                        <button className="exit-addproductioniot" onClick={showFormProductIot}>Đóng</button>
                        <button className="save-productioniot" type="submit">Lưu</button>
                    </div>
                </form>
            </div>
            }
            {showFormExport && 
            <div className="back-form">
                <div className="modal-form"></div>
                <form className="add-productioniot" onSubmit={handleSubmit(onSubmitExport)}>
                    <h2>Xuất lô sản phẩm</h2>
                    <div className="form-container">
                        <label><b>Lô sản phẩm</b><br/>
                            <select className="select-productiot" placeholder="Chọn lô sản phẩm" {...register("product_lot_id", {required: true})}>
                                {productIot.map((item, index) => (
                                    <option value={item.product_lot_id} key = {index}>{item.product_lot_id.slice(0, 10)}</option>
                                ))}
                            </select>
                            {errors.product_lot_id && <span><br/>Bạn chưa chọn lô sản phẩm</span>}
                        </label>
                        <label><b>Đại lý phân phối</b><br/>
                            <select className="select-agent" placeholder="Chọn đại lý phân phối" {...register("distribution_agent_id", {required: true})}>
                                {agent.map((item, index) => (
                                    <option value={item.distribution_agent_id} key = {index}>{item.name}</option>
                                ))}
                            </select>
                            {errors.distribution_agent_id && <span><br/>Bạn chưa chọn đại lý phân phối</span>}
                        </label>
                        <label><b>Ngày xuất kho</b><br/>
                            <input type="date" placeholder="Chọn ngày xuất kho" {...register("export_time", {required: true})}/>
                            {errors.export_time && <span><br/>Bạn chưa chọn ngày xuất kho</span>}
                        </label>
                    </div>
                    <div className="form-footer">
                        <button className="exit-addproductioniot" onClick={showFormExportProductIot}>Đóng</button>
                        <button className="save-productioniot" type="submit">Lưu</button>
                    </div>
                </form>
            </div>
            }
        </div>
    )
}

export default ProductionIot;