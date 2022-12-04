import "./FactoryItem.css"
import imageProductline from "../../../assets/iphone.png"

const FactoryItem = ({props}) => {
    return (
        <div className="factory">
            <img src={imageProductline}  className="image-factory"/>
            <div>
                <h3>{props.name}</h3>
                <p>
                {/* Mã: {props.manufacture_factory_id}<br/> */}
                Địa chỉ: {props.address}<br/>
                Số điện thoại: {props.phone_number}<br/>
                Số lượng đã sản xuất: {props.production_number}<br/>
                Số lượng phân phối: {props.productions_distributed}<br/>
                Số lượng bảo hành: {props.guarantee_number}<br/>
                Số lượng trả về: {props.production_return_back_number}<br/>
                Kho sản phẩm lỗi: {props.error_number}</p>
            </div>
        </div>
    )
}
export default FactoryItem;