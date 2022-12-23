import Api from "../../../api/Api";
import "./Warrantied.css"
import { useEffect, useState } from "react";
import WarrantiedItem from "../../../components/WarrantyCenter/WarrantiedItem/WarrantiedItem";

const Warrantied = () => {
    const [data, setData] = useState([])

    const getData = async() => {
        const response = await Api.getGuaranteeDoneProduction();
        setData(response.data.productions)
        console.log(response)
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <h1>Sản phẩm đã bảo hành</h1>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã sản phẩm</th>
                        <th>Dòng sản phẩm</th>
                        <th>Lô sản xuất</th>
                        <th>Cơ sở sản xuất</th>
                        <th>Ngày sản xuất</th>
                        <th>Ngày bảo hành</th>
                        <th>Ngày gửi trả</th>
                        <th>Tình trạng</th>
                        <th>Đại lý</th>
                        <th>Khách hàng</th>
                        <th>Địa chỉ</th>
                        <th>Số điện thoại</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <WarrantiedItem key={index} props={item} index = {index + 1}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Warrantied;