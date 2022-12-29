import "./HomeWarranty.css"
import { useState } from "react";
import { useForm } from "react-hook-form";
import WarrantyingItem from "../../../components/WarrantyCenter/WarrantyingItem/WarrantyingItem";
import { useEffect } from "react";
import Api from "../../../api/Api";

const HomeWarranty = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showForm, setShowForm] = useState(false);
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [productline, setProductline] = useState([]);
    const [factory, setFactory] = useState([])
    const [agent, setAgent] = useState([])
    const [filterProductline, setFilterProductline] = useState("all");
    const [filterFactory, setFilterFactory] = useState("all")
    const [filterAgent, setFilterAgent] = useState("all")

    const showFormSend = () => {
        showForm ? setShowForm(false) : setShowForm(true);
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

    const getAgent = async () => {
        const response = await Api.getAgent();
        if (response.status === 200) {
            setAgent(response.data.distribution_agents);
        }
    }
    const getData = async() => {
        try {
            const response = await Api.getGuaranteeingProduction();
            setData(response.data.productions)
            setFilterData(response.data.productions)
            console.log(response)
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
        getProductline();
        getFactory();
        getAgent();
    }, [])

    const onSubmit = async (data) => {
        try {
            if (data.status === "success") {
                delete data.status;
                const response = await Api.guaranteeDone(data);
                console.log(response)
                if(response.status == 200) {
                    showFormSend();
                    alert(`Đã gửi trả cho khách hàng
                    Mã sản phẩm: ${data.production_id.slice(0,10)}`)
                    getData();
                }
            } else {
                delete data.status;
                const response = await Api.guaranteeError(data);
                console.log(response)
                if(response.status == 200) {
                    showFormSend();
                    alert(`Đã gửi về nhà máy
                    Mã sản phẩm: ${data.production_id.slice(0,10)}`)
                    getData();
                }
            }
        } catch(err) {
            console.log(err);
        }
    }

    const handleProductline = (e) => {
        setFilterProductline(e.target.value)
    }

    const handleFactory = (e) => {
        setFilterFactory(e.target.value)
    }

    const handleAgent = (e) => {
        setFilterAgent(e.target.value)
    }

    useEffect(() => {
        let productions = data;
        if (filterProductline != "all") {
            productions = productions.filter(item => item.product_line_name == filterProductline);
        }
        if (filterFactory != "all") {
            productions = productions.filter(item => item.manufacture_factory_name == filterFactory);
        }
        if (filterAgent != "all") {
            productions = productions.filter(item => item.distribution_agent_name == filterAgent);
        }
        setFilterData(productions);
    },[filterProductline, filterFactory, filterAgent])

    return (
        <div className="container">
            <h1>Sản phẩm đang bảo hành</h1>
            <div className="button-container">
                <button className="button-send" onClick={showFormSend}>Gửi trả</button>
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
                <label><b>Đại lý</b><br/>
                <select onChange={handleAgent}>
                        <option value="all">Tất cả</option>
                        {agent.map((item, index) => (
                            <option value={item.name} key = {index}>{item.name}</option>
                        ))}
                    </select>
                </label>
            </div>
            <table>
                <thead>
                    <tr>
                        <th style={{width: "22px"}}>STT</th>
                        <th style={{width: "90px"}}>Mã sản phẩm</th>
                        <th style={{width: "170px"}}>Dòng sản phẩm</th>
                        <th style={{width: "90px"}}>Lô sản xuất</th>
                        <th style={{width: "100px"}}>Cơ sở sản xuất</th>
                        <th style={{width: "100px"}}>Ngày sản xuất</th>
                        <th style={{width: "100px"}}>Ngày bảo hành</th>
                        <th style={{width: "100px"}}>Đại lý</th>
                        <th style={{width: "150px"}}>Khách hàng</th>
                        <th style={{width: "200px"}}>Địa chỉ</th>
                        <th style={{width: "100px"}}>Số điện thoại</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.map((item, index) => (
                        <WarrantyingItem key={index} props={item} index = {index + 1}/>
                    ))}
                </tbody>
            </table>
            {showForm && 
            <div className="back-form">
                <div className="modal-form"></div>
                <form className="form-send" onSubmit={handleSubmit(onSubmit)}>
                    <h2>Gửi trả sản phẩm bảo hành</h2>
                    <div className="form-container">
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
                    <div className="form-footer">
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