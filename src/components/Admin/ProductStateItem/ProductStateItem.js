const ProductStateItem  = ({props, index}) => {
    switch (props.status) {
        case "NEW_PRODUCTION":
            props.status = "Mới sản xuất";
            break;
        case "GO_TO_DISTRIBUTION":
            props.status = "Đã phân phối";
            break;
        case "SOLD":
            props.status = "Đã bán";
            break;
        case "GUARANTEEING":
            props.status = "Đang bảo hành";
            break;
        case "DISTRIBUTE_BACK_TO_CUSTOMER":
            props.status = "Trả về khách hàng";
            break;
        case "ERROR_NEED_BACK_TO_MANUFACTURE_FACTORY":
            props.status = "Trả về nhà máy";
            break;
        case "GUARANTEE_EXPIRED":
            props.status = "Hết hạn bảo hành";
            break;
        case "BACK_TO_FACTORY":
            props.status = "Không bán được, trả về nhà máy";
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
            <td>{props.status}</td>
            <td>{props.sold_at}</td>
            <td>{props.distribution_agent_name}</td>
            <td>{props.warranty_center_name}</td>
            <td>{props.guarantee_number}</td>
            <td>{props.customer_name}</td>
        </tr>
    )
}

export default ProductStateItem;