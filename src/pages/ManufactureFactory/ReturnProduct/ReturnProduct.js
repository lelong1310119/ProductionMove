import "./ReturnProduct.css"
import { useEffect, useState } from "react";
import ReturnProductItem from "../../../components/ManufactureFactory/ReturnProductItem/ReturnProductItem";
import Api from "../../../api/Api";

const ReturnProduct = () => {
    const [data, setData] = useState([])

    const getData = async() => {
        try {
            const response = await Api.getProductionReturn();
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
            <h1>Sản phẩm bị trả về</h1>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã sản phẩm</th>
                        <th>Dòng sản phẩm</th>
                        <th>Lô sản xuất</th>
                        <th>Ngày sản xuất</th>
                        <th>Đại lý</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <ReturnProductItem key={index} props={item} index = {index + 1}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ReturnProduct;