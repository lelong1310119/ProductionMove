import { useState } from "react";
import "./Product.css"

const Product = () => {
    const [productData, setProductData] = useState([]);
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
                </tbody>
            </table>
        </div>
    )
}

export default Product;