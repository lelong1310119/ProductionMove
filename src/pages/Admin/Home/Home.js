import ProductLineItem from "../../../components/Admin/ProductLineItem/ProductLineItem";
import "./Home.css";
import { useState } from "react";

const Home = () => {
    const [showForm, setShowForm] = useState(false)
    const data = {
        product_line_id: "IP_SDJ",
        name: "Iphone XSMAX 64GB", 
        configuration: {
            ram: "4 GB",
            cpu: "abc 4 chip",
            screen: "6.7 in",
            camera: "3 x 7MP",
            pin: "5000MAH",
        },
        price: "10.000.000"
    }

    const showFormProductline = () => {
        showForm ? setShowForm(false) : setShowForm(true);
    }

    const handleSubmit = (event) => {
        console.log(event.target);
    }
    return (
        <div>
            <h1>Quản lý dòng sản phẩm</h1>
            <button className="button-add-productline" onClick={showFormProductline}>Thêm mới</button>
            <div className="container-home">
                <ProductLineItem key={"1"} name={data.name} product_line_id={data.product_line_id} configuration={data.configuration} price={data.price} />
                <ProductLineItem key={"2"} name={data.name} product_line_id={data.product_line_id} configuration={data.configuration} price={data.price} />
                <ProductLineItem key={"3"} name={data.name} product_line_id={data.product_line_id} configuration={data.configuration} price={data.price} />
                <ProductLineItem key={"4"} name={data.name} product_line_id={data.product_line_id} configuration={data.configuration} price={data.price} />
                <ProductLineItem key={"6"} name={data.name} product_line_id={data.product_line_id} configuration={data.configuration} price={data.price} />
                <ProductLineItem key={"7"} name={data.name} product_line_id={data.product_line_id} configuration={data.configuration} price={data.price} />
                <ProductLineItem key={"8"} name={data.name} product_line_id={data.product_line_id} configuration={data.configuration} price={data.price} />
                <ProductLineItem key={"9"} name={data.name} product_line_id={data.product_line_id} configuration={data.configuration} price={data.price} />
            </div>
            {showForm && 
            <div className="back-form-addproductline">
                <div className="modal-form-productline"></div>
                <form className="add-productline">
                    <h2>Thêm dòng sản phẩm mới</h2>
                    <div className="add-productline-container">
                        <label><b>Tên sản phẩm</b><br/>
                            <input type="text" placeholder="Nhập tên dòng sản phẩm"/>
                        </label>
                        <label><b>RAM</b><br/>
                            <input type="text" placeholder="Nhập RAM"/>
                        </label>
                        <label><b>Bộ nhớ trong</b><br/>
                            <input type="text" placeholder="Nhập bộ nhớ trong"/>
                        </label>
                        <label><b>Màn hình</b><br/>
                            <input type="text" placeholder="Nhập kích thước màn hình"/>
                        </label>
                        <label><b>CPU</b><br/>
                            <input type="text" placeholder="Nhập CPU"/>
                        </label>
                        <label><b>Camera</b><br/>
                            <input type="text" placeholder="Nhập camera"/>
                        </label>
                        <label><b>Dung lượng Pin</b><br/>
                            <input type="text" placeholder="Nhập dung lượng pin"/>
                        </label>
                        <label><b>Giá bán</b><br/>
                            <input type="text" placeholder="Nhập giá sản phẩm"/>
                        </label>
                    </div>
                    <div className="add-productline-footer">
                        <button className="exit-addproductline" onClick={showFormProductline}>Đóng</button>
                        <button className="save-productline" type="submit" onClick={handleSubmit}>Lưu</button>
                    </div>
                </form>
            </div>
            }
        </div>
    )
}

export default Home;