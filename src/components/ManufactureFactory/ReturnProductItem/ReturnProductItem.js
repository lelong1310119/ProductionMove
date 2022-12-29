const ReturnProductItem  = ({props, index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{props.production_id.slice(0, 10)}</td>
            <td>{props.product_line_name}</td>
            <td>{props.product_lot_id.slice(0, 10)}</td>
            <td>{props.production_time}</td>
        </tr>
    )
}

export default ReturnProductItem;