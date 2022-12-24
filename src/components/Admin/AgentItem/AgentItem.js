import "./AgentItem.css"
import imgAgent from "../../../assets/imageAgent.jpg"

const AgentItem = ({props}) => {
    return (
        <div className="agent">
            <img src={imgAgent}  className="image-agent"/>
            <div>
                <h3>{props.name}</h3>
                <p>
                Mã: {props.distribution_agent_id.slice(0, 10)}<br/>
                Địa chỉ: {props.address}<br/>
                Số điện thoại: {props.phone_number}<br/>
                Số lượng đã nhận: {props.received_productions_number}<br/>
                Số lượng đã bán: {props.productions_sold}<br/>
                Số lượng trả về: {props.return_back}</p>
            </div>
        </div>
    )
}
export default AgentItem;