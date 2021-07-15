import { TableCell, TableRow } from '@material-ui/core';
import { React } from 'react';
import context from '../core/context';

const items = (item) => {
	const { id, product, price, shopName } = item;

	return <TableRow key={ id }onClick={ () => context.actions.edit(item) }>
		<TableCell align="center">{ shopName }</TableCell>
		<TableCell align="center">{ product }</TableCell>
		<TableCell align="center">{ price }</TableCell>
	</TableRow>;
};

export default items;
