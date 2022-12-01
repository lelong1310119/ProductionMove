import "./ProductLineItem.css"
import imageProductline from "../../../assets/iphone.png"

const ProductLineItem = ({product_line_id, name, configuration, price, production_number, quantity_sold, amount_warranty}) => {
    return (
        <div className="productline">
            <img src={imageProductline}  className="image-product"/>
            <div>
                <h3>{name}</h3>
                <p>Mã: {product_line_id}<br/>
                Ram: {configuration.ram}<br/>
                CPU: {configuration.cpu}<br/>
                Màn hình: {configuration.screen}<br/>
                Camera: {configuration.camera}<br/>
                Pin: {configuration.pin}<br/>
                Giá: {price}<br/>
                Số lượng sản xuất: {production_number}<br/>
                Số lượng đã bán: {quantity_sold}<br/>
                Số lượng bảo hành: {amount_warranty}</p>
            </div>
        </div>
    )
}
export default ProductLineItem;