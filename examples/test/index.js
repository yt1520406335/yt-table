import React from 'react'
import ReactDOM from 'react-dom'
// import OtherTableShow from './src/OtherTableShow'
import Table from '../../lib/ytTable'
// import { Select } from 'antd'
// import Select, { Option } from 'rc-select'
// import Trigger from 'rc-trigger'
import 'normalize.css'

// const { Select } = Table
// const Option = Select.Option

const data = [
	{
		name: 'yt1111111111111111111111111111',
		age: '25',
		id: 1,
		sex: '男',
		height: '174',
	},
	{ name: 'yt2', age: '25', id: 2, sex: '男', height: '174' },
	{ name: 'yt3', age: '25', id: 3, sex: '男', height: '174' },
	{ name: 'yt3', age: '25', id: 4, sex: '男', height: '174' },
	{ name: 'yt3', age: '25', id: 5, sex: '男', height: '174' },
	{ name: 'yt3', age: '25', id: 6, sex: '男', height: '174' },
	{ name: 'yt3', age: '25', id: 7, sex: '男', height: '175' },
]

const columns = [
	{
		title: '姓名',
		key: 'name',
		type: 'input',
        canFocus: true,
        width: 100,
	},
	{
		title: '年龄',
		key: 'age',
		fatherTitle: {
			title: '基本信息',
        },
        width: 100,
	},
	{
		title: '性别',
		key: 'sex',
		type: 'select',
		// type: 'input',
		fatherTitle: {
			title: '基本信息',
		},
		options: [{ value: '女', key: '1' }, { value: '男', key: '2' }],
        canFocus: true,
        width: 100,
	},
	{
		title: '身高',
		key: 'height',
		type: 'input',
		fatherTitle: {
			title: '基本信息',
		},
        canFocus: true,
        width: 100,
	},
]

const columns1 = [
	{
		title: <span style={{ color: 'red' }}>姓名</span>,
		key: 'name',
		type: 'input',
	},
	{
		title: '年龄',
		key: 'age',
		fatherTitle: {
			title: '基本信息',
		},
	},
	{
		title: '性别',
		key: 'sex',
		fatherTitle: {
			title: '基本信息',
		},
	},
]

class TableTest extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			columns,
			dataSource: data,
		}
	}

	handleCellChange = (rowKey, cellKey, val) => {
		const { dataSource } = this.state
		this.setState({
			dataSource: dataSource.map(record => {
				if (record.id === rowKey) {
					return {
						...record,
						[cellKey]: val,
					}
				}
				return record
			}),
		})
	}

	render() {
		const { name } = this.props
		return (
			<div>
				<div>common table</div>
				<div
					style={{
						// width: 300,
						height: 200,
					}}
				>
					<Table
                        draggable
						getRowKey={record => record.id}
						dataSource={this.state.dataSource}
						columns={this.state.columns}
						onCellChange={this.handleCellChange}
						handleRowClick={rowKey => {}}
					/>
				</div>
			</div>
		)
	}
}

function App(props) {
	return (
		<div style={{ marginLeft: 10 }}>
			<TableTest />
			{/* <Select style={{ width: 180 }}>
				{[1, 2, 3, 4].map(it => (
					<Option key={it} value={it}>
						{it}
					</Option>
				))}
			</Select> */}
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
