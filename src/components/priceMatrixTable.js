import { Paper, Table, TableCell,
	TableContainer, TableHead, TableRow } from '@material-ui/core';
import { React } from 'react';
import context from '../core/context';
import MinAndMaxItems from './minAndMaxItems';

const PriceMatrixTableCell = (head) =>
	<TableCell key={ head }>{head}</TableCell>;

const PriceMatrixTable = () =>
	<TableContainer component={ Paper }>
		<Table className="price-matrix-table">
			<TableHead>
				<TableRow>
					<TableCell align="center"colSpan="3">Minimum</TableCell>
					<TableCell align="center"colSpan="3">Maximum</TableCell>
				</TableRow>
				<TableRow>
					{context.config.tableHead.map(PriceMatrixTableCell)}
					{context.config.tableHead.map(PriceMatrixTableCell)}
				</TableRow>
			</TableHead>
			{ MinAndMaxItems() }
		</Table>
	</TableContainer>;

export default PriceMatrixTable;
