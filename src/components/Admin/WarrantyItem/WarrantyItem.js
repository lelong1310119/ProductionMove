import "./WarrantyItem.css"
import imageProductline from "../../../assets/iphone.png"

const WarrantyItem = ({props}) => {
    return (
        <div className="warranty">
            <img src={imageProductline}  className="image-warranty"/>
            <div>
                <h3>{props.name}</h3>
                <p>
                Mã: {props.warranty_center_id.slice(0, 10)}<br/>
                Địa chỉ: {props.address}<br/>
                Số điện thoại: {props.phone_number}<br/>
                Đang bảo hành: {props.guaranteeing_number}<br/>
                Đã bảo hành: {props.guarantee_done_number}<br/>
                Lỗi không thể bảo hành: {props.can_not_guarantee}</p>
            </div>
        </div>
    )
}
export default WarrantyItem;