import imageProductline from "../../../assets/iphone.png"
import "./ProductionIotItem.css"


const ProductionIotItem = ({props}) => {
    return (
        <div className="production-iot">
            <img src={imageProductline}  className="image-product-iot"/>
            <div>
                <h3>{props.name}</h3>
                <p>
                Mã lô: {props.product_lot_id.slice(0, 10)}<br/>
                Dòng: {props.product_line.name}<br/>
                Ram: {props.product_line.configuration.ram}<br/>
                CPU: {props.product_line.configuration.cpu}<br/>
                Màn hình: {props.product_line.configuration.screen}<br/>
                Camera: {props.product_line.configuration.camera}<br/>
                Pin: {props.product_line.configuration.pin}<br/>
                Số lượng sản xuất: {props.production_number}<br/>
                Ngày sản xuất: {props.production_time}<br/>
                Đại lý phân phối: {props.distribution_agent_name ? props.distribution_agent_name : ""}</p>
            </div>
        </div>
    )
}
export default ProductionIotItem;