import "./AgentItem.css"
import imageProductline from "../../../assets/iphone.png"

const AgentItem = ({props}) => {
    return (
        <div className="agent">
            <img src={imageProductline}  className="image-agent"/>
            <div>
                <h3>{props.name}</h3>
                <p>Mã: {props.id}<br/>
                Địa chỉ: {props.address}<br/>
                Số điện thoại: {props.phone}<br/>
                Số lượng đã nhận: {props.quantity_received}<br/>
                Số lượng đã bán: {props.quantity_sold}<br/>
                Số lượng trả về: {props.return_amount}</p>
            </div>
        </div>
    )
}
export default AgentItem;