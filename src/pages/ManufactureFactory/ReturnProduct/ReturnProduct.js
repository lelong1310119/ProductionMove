import "./ReturnProduct.css"
import { useEffect, useState } from "react";
import ReturnProductItem from "../../../components/ManufactureFactory/ReturnProductItem/ReturnProductItem";
import Api from "../../../api/Api";

const ReturnProduct = () => {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [productline, setProductline] = useState([]);
    const [filterProductline, setFilterProductline] = useState("all");

    const getData = async() => {
        try {
            const response = await Api.getProductionReturn();
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

    const handleProductline = (e) => {
        setFilterProductline(e.target.value)
    }

    useEffect(() => {
        let productions = data;
        if (filterProductline != "all") {
            productions = productions.filter(item => item.product_line_name == filterProductline);
        }
        setFilterData(productions);
    },[filterProductline])

    useEffect(() => {
        getData();
        getProductline();
    }, [])


    return (
        <div className="container">
            <h1>Sản phẩm bị trả về</h1>
            <div style={{marginLeft: "275px"}} className="filter-admin">
                <label><b>Dòng sản phẩm</b><br/>
                    <select onChange={handleProductline}>
                        <option value="all">Tất cả</option>
                        {productline.map((item, index) => (
                            <option value={item.name} key = {index}>{item.name}</option>
                        ))}
                    </select>
                </label>
            </div>
            <table>
                <thead>
                    <tr>
                        <th style={{width: "40px"}}>STT</th>
                        <th style={{width: "150px"}}>Mã sản phẩm</th>
                        <th style={{width: "200px"}}>Dòng sản phẩm</th>
                        <th style={{width: "150px"}}>Lô sản xuất</th>
                        <th style={{width: "150px"}}>Ngày sản xuất</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.map((item, index) => (
                        <ReturnProductItem key={index} props={item} index = {index + 1}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ReturnProduct;