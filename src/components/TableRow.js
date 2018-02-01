import React from 'react'
import TableCell from './tableCell/TableCell'
import config from './config'
const { ytTablePerfix } = config

class TableRow extends React.PureComponent {

	handleRowClick = e => {
        const { changeCurrentRowKey, rowKey, handleRowClick } = this.props
        changeCurrentRowKey(rowKey)
        handleRowClick && handleRowClick(rowKey)
    }

	handleDoubleRowClick = e => {
        const { changeCurrentRowKey, rowKey, handleDoubleRowClick } = this.props
        changeCurrentRowKey(rowKey)
        handleDoubleRowClick && handleDoubleRowClick(rowKey)
    }

	render() {
        const { record, columns, rowKey, currentRowKey } = this.props
        const isSelectedRow = rowKey === currentRowKey
		return (
			<div
                onClick={this.handleRowClick}
				onDoubleClick={this.handleDoubleRowClick}
				className={`${ytTablePerfix}-row ${isSelectedRow?`${ytTablePerfix}-selected-row`:''}`}
			>
				{columns.map(column => {
					return (
						<TableCell
							{...this.props}
							cellKey={column.key}
							key={column.key}
							column={column}
						/>
					)
				})}
			</div>
		)
	}
}

export default TableRow