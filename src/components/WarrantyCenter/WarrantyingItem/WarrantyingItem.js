const WarrantyingItem  = ({props, index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{props.production_id.slice(0, 10)}</td>
            <td>{props.product_line_name}</td>
            <td>{props.product_lot_id.slice(0, 10)}</td>
            <td>{props.manufacture_factory_name}</td>
            <td>{props.production_time}</td>
            <td>{props.receive_at}</td>
            <td>{props.distribution_agent_name}</td>
            <td>{props.customer_name}</td>
            <td>{props.customer_address}</td>
            <td>{props.customer_phone_number}</td>
        </tr>
    )
}

export default WarrantyingItem;