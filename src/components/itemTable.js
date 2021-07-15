import { Paper, Table, TableBody, TableCell,
	TableContainer, TableHead, TableRow } from '@material-ui/core';
import { React } from 'react';
import context from '../core/context';
import PriceMatrixManager from '../services/price-matrixManager';
import items from './items';

const TableCellHead = (tableCell) =>
	<TableCell key={ tableCell }align="center">{tableCell}</TableCell>;

const ItemTable = () => {
	const { item, filterShop, filterProduct } = context.state;
	const itemList = PriceMatrixManager.itemList(
		item, filterShop, filterProduct
	);

	return <TableContainer component={ Paper }>
		<Table className="items-table">
			<TableHead>
				<TableRow>
					{context.config.tableHead.map(TableCellHead)}
				</TableRow>
			</TableHead>
			<TableBody>{ itemList.map(items) }</TableBody>
		</Table>
	</TableContainer>;
};

export default ItemTable;
