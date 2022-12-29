import Api from "../../../api/Api";
import "./Warrantied.css"
import { useEffect, useState } from "react";
import WarrantiedItem from "../../../components/WarrantyCenter/WarrantiedItem/WarrantiedItem";

const Warrantied = () => {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [productline, setProductline] = useState([]);
    const [factory, setFactory] = useState([])
    const [agent, setAgent] = useState([])
    const [filterProductline, setFilterProductline] = useState("all");
    const [filterFactory, setFilterFactory] = useState("all")
    const [filterAgent, setFilterAgent] = useState("all")

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
            const response = await Api.getGuaranteeDoneProduction();
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
            <h1>Sản phẩm đã bảo hành</h1>
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
                        <th style={{width: "86px"}}>Mã sản phẩm</th>
                        <th style={{width: "150px"}}>Dòng sản phẩm</th>
                        <th style={{width: "86px"}}>Lô sản xuất</th>
                        <th style={{width: "80px"}}>Cơ sở sản xuất</th>
                        <th style={{width: "90px"}}>Ngày sản xuất</th>
                        <th style={{width: "90px"}}>Ngày bảo hành</th>
                        <th style={{width: "90px"}}>Ngày gửi trả</th>
                        <th style={{width: "160px"}}>Tình trạng</th>
                        <th style={{width: "80px"}}>Đại lý</th>
                        <th style={{width: "120px"}}>Khách hàng</th>
                        <th style={{width: "120px"}}>Địa chỉ</th>
                        <th style={{width: "100px"}}>Số điện thoại</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.map((item, index) => (
                        <WarrantiedItem key={index} props={item} index = {index + 1}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Warrantied;