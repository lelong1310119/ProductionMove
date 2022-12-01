import "./WarrantyItem.css"
import imageProductline from "../../../assets/iphone.png"

const WarrantyItem = ({props}) => {
    return (
        <div className="warranty">
            <img src={imageProductline}  className="image-warranty"/>
            <div>
                <h3>{props.name}</h3>
                <p>Mã: {props.id}<br/>
                Địa chỉ: {props.address}<br/>
                Số điện thoại: {props.phone}<br/>
                Đang bảo hành: {props.quantity_warrantying}<br/>
                Đã bảo hành: {props.quantity_warrantied}<br/>
                Lỗi không thể bảo hành: {props.error_warranty}</p>
            </div>
        </div>
    )
}
export default WarrantyItem;