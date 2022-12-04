import "./ProductLineItem.css"
import imageProductline from "../../../assets/iphone.png"

const ProductLineItem = ({props}) => {
    return (
        <div className="productline">
            <img src={imageProductline}  className="image-product"/>
            <div>
                <h3>{props.name}</h3>
                <p>
                {/* Mã: {props.product_line_id}<br/> */}
                Ram: {props.configuration.ram}<br/>
                CPU: {props.configuration.cpu}<br/>
                Màn hình: {props.configuration.screen}<br/>
                Camera: {props.configuration.camera}<br/>
                Pin: {props.configuration.pin}<br/>
                Giá: {props.price}<br/>
                Thời gian bảo hành: {props.time_guarantee}<br/>
                Số lượng sản xuất: {props.production_number}<br/>
                Số lượng đã bán: {props.productions_sold}<br/>
                Số lượng bảo hành: {props.guarantee_number}</p>
            </div>
        </div>
    )
}
export default ProductLineItem;