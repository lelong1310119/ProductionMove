import "./Product.css"
import { useEffect, useState } from "react";
import axios from "axios";
import ProductStateItem from "../../../components/Admin/ProductStateItem/ProductStateItem";
import Api from "../../../api/Api";

const Product = () => {
    const getURL = "https://production-move-be.vercel.app/api/productions?page=1&per_page=10000"
    const [data, setData] = useState([]);
    const [productline, setProductline] = useState([]);
    const [factory, setFactory] = useState([])
    const [agent, setAgent] = useState([])
    const [warrantyCenter, setWarrantyCenter] = useState([]);
    const [filter_productline, setFilter_productline] = useState("all")
    const [filter_factory, setFilter_factory] = useState("all")
    const [filter_agent, setFilter_agent] = useState("all")
    const [filter_warranty, setFilter_warranty] = useState("all")


    useEffect(() => {
        getData();
        // getProductline();
        // getFactory();
        // getAgent();
        // getWarrantyCenter();
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get(getURL)
            if (response.status == 200) {
            setData(response.data.productions);
        }
        } catch(err) {
            console.log(err)
        }
    }

    // const getProductline = async () => {
    //     const response = await Api.getProductline();
    //     if (response.status == 200) {
    //         setProductline(response.data.product_lines);
    //     }
    // }

    // const getFactory = async () => {
    //     const response = await Api.getFactory();
    //     if (response.status == 200) {
    //         setFactory(response.data.manufacture_factories);
    //     }
    // }

    // const getAgent = async () => {
    //     const response = await Api.getAgent();
    //     if (response.status == 200) {
    //         setAgent(response.data.distribution_agents);
    //     }
    // }

    // const getWarrantyCenter = async () => {
    //     const response = await Api.getWarrantyCenter();
    //     if (response.status == 200) {
    //         setWarrantyCenter(response.data.warranty_centers);
    //     }
    // }

    // const filter = () => {
    //     getData();
    //     let filter;
    //     if (filter_productline != "all") {
    //         filter = data.filter(item => item.product_line_name == filter_productline)
    //     }
    //     if (filter_factory != "all") {
    //         filter = filter.filter(item => item.manufacture_factory_name == filter_factory)
    //     }
    //     if (filter_agent != "all") {
    //         filter = filter.filter(item => item.distribution_agent_name == filter_agent)
    //     }
    //     if (filter_warranty != "all") {
    //         filter = filter.filter(item => item.warranty_center_name == filter_warranty)
    //     }
    //     setData(filter)
    //     getProductline();
    //     getFactory();
    //     getAgent();
    //     getWarrantyCenter();
    // }

    // const filterProductline = (e) => {
    //     console.log(e.target.value);
    //     setFilter_productline(e.target.value);
    //     filter();
    // }

    // const filterFactory = (e) => {
    //     console.log(e.target.value);
    //     setFilter_factory(e.target.value);
    //     filter();
    // }

    // const filterAgent = (e) => {
    //     console.log(e.target.value);
    //     setFilter_agent(e.target.value);
    //     filter();
    // }

    // const filterWarranty = (e) => {
    //     console.log(e.target.value);
    //     setFilter_warranty(e.target.value);
    //     filter();
    // }

    return (
        <div className="container">
            <h1>Quản lý trạng thái sản phẩm</h1>
            {/* <div className="filter-admin">
                <label><b>Dòng sản phẩm</b><br/>
                    <select onChange={filterProductline}>
                        <option value="all">Tất cả</option>
                        {productline.map((item, index) => (
                            <option value={item.name} key = {index}>{item.name}</option>
                        ))}
                    </select>
                </label>
                <label><b>Cơ sở sản xuất</b><br/>
                    <select onChange={filterFactory}>
                        <option value="all">Tất cả</option>
                        {factory.map((item, index) => (
                            <option value={item.name} key = {index}>{item.name}</option>
                        ))}
                    </select>
                </label>
                <label><b>Đại lý</b><br/>
                    <select onChange={filterAgent}>
                        <option value="all">Tất cả</option>
                        {agent.map((item, index) => (
                            <option value={item.name} key = {index}>{item.name}</option>
                        ))}
                    </select>
                </label>
                <label><b>Trung tâm bảo hành</b><br/>
                    <select onChange={filterWarranty}>
                        <option value="all">Tất cả</option>
                        {warrantyCenter.map((item, index) => (
                            <option value={item.name} key = {index}>{item.name}</option>
                        ))}
                    </select>
                </label>
            </div> */}
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
                        <th>Đại lý</th>
                        <th>TT Bảo hành</th>
                        <th>Số lần BH</th>
                        <th>Khách hàng</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <ProductStateItem key={index} props={item} index = {index + 1}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Product;