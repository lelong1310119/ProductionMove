import "./ErrorProduct.css"
import { useEffect, useState } from "react";
import ErrorProductItem from "../../../components/ManufactureFactory/ErrorProductItem/ErrorProductItem";
import Api from "../../../api/Api";

const ErrorProduct = () => {
    const [data, setData] = useState([])

    const getData = async() => {
        try {
            const response = await Api.getProductionError();
            if (response.status == 200) setData(response.data.productions)
            console.log(response);
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="container">
            <h1>Sản phẩm lỗi không bảo hành được</h1>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã sản phẩm</th>
                        <th>Dòng sản phẩm</th>
                        <th>Lô sản xuất</th>
                        <th>Ngày sản xuất</th>
                        <th>Ngày bán</th>
                        <th>Đại lý</th>
                        <th>TT Bảo hành</th>
                        <th>Số lần BH</th>
                        <th>Khách hàng</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <ErrorProductItem key={index} props={item} index = {index + 1}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ErrorProduct;