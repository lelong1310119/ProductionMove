import "./Product.css"
import { useEffect, useState } from "react";
import axios from "axios";
import ProductStateItem from "../../../components/Admin/ProductStateItem/ProductStateItem";

const Product = () => {
    const getURL = "https://production-move-be.vercel.app/api/productions?page=1&per_page=10000"
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(getURL).then((response) => {
            setData(response.data.productions);
        });
    }, [])

    return (
        <div>
            <h1>Quản lý trạng thái sản phẩm</h1>
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