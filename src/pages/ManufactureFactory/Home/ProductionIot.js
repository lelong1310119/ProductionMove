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
        const response = await Api.getProductionIot();
        const data = response.data.production_lots;
        const productiots = data.filter( item => !item.distribution_agent_name)
        console.log(data)
        console.log(productiots)
        setData(data)
        setProductIot(productiots);
    }

    const getAgent =  async () => {
        const response = await Api.getAgent();
        setAgent(response.data.distribution_agents);
        console.log(response)
    }
    const getProductline = async () => {
        const response = await Api.getProductline();
        setProductline(response.data.product_lines);
        console.log(response)
    }
    useEffect(() => {
        getProductline();
        getData();
        getAgent();
        console.log(productline)
    }, [])

    // đang lỗi
    const onSubmit = async(data) => {
        data.production_number = Number(data.production_number)
        const response = await Api.createProductionIot(data);
        console.log(response);
        if(response.status == 200) {
            showFormProductIot();
            getData();
        }
    }

    const onSubmitExport = async(data) => {
        console.log(data);
        const response = await Api.exportProductionIot(data);
        console.log(response);
        if(response.status == 200) {
            showFormExportProductIot();
            getData();
        }
    }
    return (
        <div>
            <h1>Quản lý lô sản phẩm</h1>
            <button className="button-add-production-iot" onClick={showFormProductIot}>Thêm mới</button>
            <button className="button-add-production-iot" onClick={showFormExportProductIot}>Xuất kho</button>
            <div className="">
                <div className="container-production-iot">
                    {data.map((item, index) => (
                        <ProductionIotItem key={index} props={item}/>
                    ))}
                </div>
            </div>
            {showForm && 
            <div className="back-form-addproductioniot">
                <div className="modal-form-productioniot"></div>
                <form className="add-productioniot" onSubmit={handleSubmit(onSubmit)}>
                    <h2>Thêm lô sản phẩm mới</h2>
                    <div className="add-productioniot-container">
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
                    <div className="add-productioniot-footer">
                        <button className="exit-addproductioniot" onClick={showFormProductIot}>Đóng</button>
                        <button className="save-productioniot" type="submit">Lưu</button>
                    </div>
                </form>
            </div>
            }
            {showFormExport && 
            <div className="back-form-addproductioniot">
                <div className="modal-form-productioniot"></div>
                <form className="add-productioniot" onSubmit={handleSubmit(onSubmitExport)}>
                    <h2>Xuất lô sản phẩm</h2>
                    <div className="add-productioniot-container">
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
                    <div className="add-productioniot-footer">
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