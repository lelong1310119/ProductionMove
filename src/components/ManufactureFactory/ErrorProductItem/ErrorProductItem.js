const ErrorProductItem  = ({props, index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{props.production_id.slice(0, 10)}</td>
            <td>{props.product_line_name}</td>
            <td>{props.product_lot_id.slice(0, 10)}</td>
            <td>{props.production_time}</td>
            <td>{props.sold_at}</td>
            <td>{props.distribution_agent_name}</td>
            <td>{props.warranty_center_name}</td>
            <td>{props.customer_name}</td>
        </tr>
    )
}

export default ErrorProductItem;