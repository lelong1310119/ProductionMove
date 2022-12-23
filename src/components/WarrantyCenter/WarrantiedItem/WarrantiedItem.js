const WarrantiedItem  = ({props, index}) => {
    switch (props.status) {
        case "DISTRIBUTE_BACK_TO_CUSTOMER":
            props.status = "Đã bảo hành xong và trả về khách hàng";
            break;
        case "ERROR_NEED_BACK_TO_MANUFACTURE_FACTORY":
            props.status = "Lỗi và đã trả về nhà máy";
            break;
        case "GUARANTEE_EXPIRED":
            props.status = "Hết hạn bảo hành";
            break;
        default:
            props.status = props.status;
    }
    return (
        <tr>
            <td>{index}</td>
            <td>{props.production_id.slice(0, 10)}</td>
            <td>{props.product_line_name}</td>
            <td>{props.product_lot_id.slice(0, 10)}</td>
            <td>{props.manufacture_factory_name}</td>
            <td>{props.production_time}</td>
            <td>{props.receive_at}</td>
            <td>{props.done_guarantee_at}</td>
            <td>{props.status}</td>
            <td>{props.distribution_agent_name}</td>
            <td>{props.customer_name}</td>
            <td>{props.customer_address}</td>
            <td>{props.customer_phone_number}</td>
        </tr>
    )
}

export default WarrantiedItem;