import "./FactoryItem.css"
import imageProductline from "../../../assets/iphone.png"

const FactoryItem = ({props}) => {
    return (
        <div className="factory">
            <img src={imageProductline}  className="image-factory"/>
            <div>
                <h3>{props.name}</h3>
                <p>Mã: {props.id}<br/>
                Địa chỉ: {props.address}<br/>
                Số điện thoại: {props.phone}<br/>
                Số lượng đã sản xuất: {props.production_number}<br/>
                Số lượng phân phối: {props.distribution_quantity}<br/>
                Số lượng bảo hành: {props.amount_warranty}<br/>
                Số lượng trả về: {props.return_amount}<br/>
                Kho sản phẩm lỗi: {props.error_product}</p>
            </div>
        </div>
    )
}
export default FactoryItem;