import "./Product.css"
import { useEffect, useState } from "react";
import axios from "axios";
import ProductStateItem from "../../../components/Admin/ProductStateItem/ProductStateItem";
import Api from "../../../api/Api";

const Product = () => {
    const getURL = "https://production-move-be.vercel.app/api/productions?page=1&per_page=10000"
    const [dataProductions, setData] = useState([]);
    const [filterData, setFilterData] = useState([])
    const [productline, setProductline] = useState([]);
    const [factory, setFactory] = useState([])
    const [agent, setAgent] = useState([])
    const [warrantyCenter, setWarrantyCenter] = useState([]);
    const [filterProductline, setFilterProductline] = useState("all");
    const [filterFactory, setFilterFactory] = useState("all")
    const [filterAgent, setFilterAgent] = useState("all")
    const [filterwarrantyCenter, setFilterWarrantyCenter] = useState("all");
    const [status, setStatus] = useState("all")

    useEffect(() => {
        getData();
        getProductline();
        getFactory();
        getAgent();
        getWarrantyCenter();
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get(getURL)
            if (response.status === 200) {
                setData(response.data.productions);
                setFilterData(response.data.productions)
            }
        } catch(err) {
            console.log(err)
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

    const getAgent = async () => {
        const response = await Api.getAgent();
        if (response.status === 200) {
            setAgent(response.data.distribution_agents);
        }
    }

    const getWarrantyCenter = async () => {
        const response = await Api.getWarrantyCenter();
        if (response.status === 200) {
            setWarrantyCenter(response.data.warranty_centers);
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

    const handleWarrantyCenter = (e) => {
        setFilterWarrantyCenter(e.target.value)
    }

    useEffect(() => {
        let productions = dataProductions;
        if (filterProductline != "all") {
            productions = productions.filter(item => item.product_line_name == filterProductline);
        }
        if (filterFactory != "all") {
            productions = productions.filter(item => item.manufacture_factory_name == filterFactory);
        }
        if (filterAgent != "all") {
            productions = productions.filter(item => item.distribution_agent_name == filterAgent);
        }
        if (filterwarrantyCenter != "all") {
            productions = productions.filter(item => item.warranty_center_name == filterwarrantyCenter);
        }
        setFilterData(productions);
    },[filterProductline, filterFactory, filterAgent, filterwarrantyCenter])

    // const onSubmit = () => {
    //     let productions = dataProductions;
    //     if (filterProductline != "all") {
    //         productions = productions.filter(item => item.product_line_name == filterProductline);
    //     }
    //     if (filterFactory != "all") {
    //         productions = productions.filter(item => item.manufacture_factory_name == filterFactory);
    //     }
    //     if (filterAgent != "all") {
    //         productions = productions.filter(item => item.distribution_agent_name == filterAgent);
    //     }
    //     if (filterwarrantyCenter != "all") {
    //         productions = productions.filter(item => item.warranty_center_name == filterwarrantyCenter);
    //     }
    //     setFilterData(productions);
    // }

    return (
        <div className="container">
            <h1>Quản lý trạng thái sản phẩm</h1>
            {/* <form className="filter-admin" onSubmit={handleSubmit(onSubmit)}>
                <label><b>Dòng sản phẩm</b><br/>
                    <select {...register("product_line_name")}>
                        <option onClick={onSubmit} value="all">Tất cả</option>
                        {productline.map((item, index) => (
                            <option onClick={onSubmit} value={item.name} key = {index}>{item.name}</option>
                        ))}
                    </select>
                </label>
                <label><b>Cơ sở sản xuất</b><br/>
                    <select onChange={onSubmit} {...register("manufacture_factory_name")}>
                        <option value="all">Tất cả</option>
                        {factory.map((item, index) => (
                            <option value={item.name} key = {index}>{item.name}</option>
                        ))}
                    </select>
                </label>
                <label><b>Đại lý</b><br/>
                <select onChange={onSubmit} {...register("distribution_agent_name")}>
                        <option value="all">Tất cả</option>
                        {agent.map((item, index) => (
                            <option value={item.name} key = {index}>{item.name}</option>
                        ))}
                    </select>
                </label>
                <label><b>Trung tâm bảo hành</b><br/>
                    <select onChange={onSubmit} {...register("warranty_center_name")}>
                        <option value="all">Tất cả</option>
                        {warrantyCenter.map((item, index) => (
                            <option value={item.name} key = {index}>{item.name}</option>
                        ))}
                    </select>
                </label>
                <button type="submit">Lọc</button>
            </form> */}
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
                        <th style={{width: "96px"}}>Cơ sở sản xuất</th>
                        <th style={{width: "100px"}}>Ngày sản xuất</th>
                        <th style={{width: "200px"}}>Tình trạng</th>
                        <th style={{width: "100px"}}>Ngày bán</th>
                        <th style={{width: "96px"}}>Đại lý</th>
                        <th style={{width: "96px"}}>TT Bảo hành</th>
                        <th style={{width: "120px"}}>Khách hàng</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.map((item, index) => (
                        <ProductStateItem key={index} props={item} index = {index + 1}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Product;