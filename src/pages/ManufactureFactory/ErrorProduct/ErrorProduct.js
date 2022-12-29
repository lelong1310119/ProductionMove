import "./ErrorProduct.css"
import { useEffect, useState } from "react";
import ErrorProductItem from "../../../components/ManufactureFactory/ErrorProductItem/ErrorProductItem";
import Api from "../../../api/Api";

const ErrorProduct = () => {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [productline, setProductline] = useState([]);
    const [agent, setAgent] = useState([])
    const [warrantyCenter, setWarrantyCenter] = useState([]);
    const [filterProductline, setFilterProductline] = useState("all");
    const [filterAgent, setFilterAgent] = useState("all")
    const [filterwarrantyCenter, setFilterWarrantyCenter] = useState("all");

    const getData = async() => {
        try {
            const response = await Api.getProductionError();
            if (response.status == 200) {
                setData(response.data.productions)
                setFilterData(response.data.productions)
            }
            console.log(response);
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

    const handleAgent = (e) => {
        setFilterAgent(e.target.value)
    }

    const handleWarrantyCenter = (e) => {
        setFilterWarrantyCenter(e.target.value)
    }

    useEffect(() => {
        let productions = data;
        if (filterProductline != "all") {
            productions = productions.filter(item => item.product_line_name == filterProductline);
        }
        if (filterAgent != "all") {
            productions = productions.filter(item => item.distribution_agent_name == filterAgent);
        }
        if (filterwarrantyCenter != "all") {
            productions = productions.filter(item => item.warranty_center_name == filterwarrantyCenter);
        }
        setFilterData(productions);
    },[filterProductline, filterAgent, filterwarrantyCenter])

    useEffect(() => {
        getData();
        getProductline();
        getAgent();
        getWarrantyCenter();
    }, [])

    return (
        <div className="container">
            <h1>Sản phẩm lỗi không bảo hành được</h1>
            <div style={{marginLeft: "140px"}} className="filter-admin">
                <label><b>Dòng sản phẩm</b><br/>
                    <select onChange={handleProductline}>
                        <option value="all">Tất cả</option>
                        {productline.map((item, index) => (
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
                        <th style={{width: "100px"}}>Ngày sản xuất</th>
                        <th style={{width: "100px"}}>Ngày bán</th>
                        <th style={{width: "100px"}}>Đại lý</th>
                        <th style={{width: "100px"}}>TT Bảo hành</th>
                        <th style={{width: "150px"}}>Khách hàng</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.map((item, index) => (
                        <ErrorProductItem key={index} props={item} index = {index + 1}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ErrorProduct;