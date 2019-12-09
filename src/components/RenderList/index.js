import React from "react";


class RenderList extends React.Component{

    render() {
        const rows = this.props.items.map((row, index) => {
            return (
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.type}</td>
                    <td>{row.count}</td>
                    <td>{row.price}</td>
                    <td>
                        <button className={"deleteButton"} onClick={() => this.props.deleteItem(row.id)}>Delete</button>
                    </td>
                </tr>
            )
        });

        return(
            rows
        )
    }
}

export default RenderList;