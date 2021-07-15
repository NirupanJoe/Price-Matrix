import { TableCell, TableRow } from '@material-ui/core';
import { React } from 'react';

const MinAndMaxItem = (item) => {
	const { product, min, max } = item;

	return <TableRow key={ product }>
		<TableCell>{min.shopName}</TableCell>
		<TableCell>{min.product}</TableCell>
		<TableCell>{min.price}</TableCell>
		<TableCell>{max.shopName}</TableCell>
		<TableCell>{max.product}</TableCell>
		<TableCell>{max.price}</TableCell>
	</TableRow>;
};

export default MinAndMaxItem;
