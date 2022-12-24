import "./SellProductItem.css"
import imageProductline from "../../../assets/iphone.png"

const SellProductItem = ({props}) => {
    return (
        <div className="sell-product-item">
            <img src={imageProductline}  className="image-sell-product"/>
            <div>
                <p>Mã sản phẩm: {props.production_id.slice(0, 10)}<br/>
                Cơ sở sản xuất: {props.manufacture_factory_name}<br/>
                Dòng: {props.product_line_name}<br/>
                RAM: {props.ram}<br/>
                Camera: {props.camera}<br/>
                Màn hình: {props.screen}<br/>
                CPU: {props.cpu}<br/>
                Pin: {props.pin}<br/>
                Giá: {props.price}<br/>
                Ngày sản xuất: {props.production_time}<br/>
                Ngày nhận: {props.import_time}</p>
            </div>
        </div>
    )
}
export default SellProductItem;