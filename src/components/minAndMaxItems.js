import { TableBody } from '@material-ui/core';
import { React } from 'react';
import context from '../core/context';
import PriceMatrixManager from '../services/price-matrixManager';
import MinAndMaxItem from './minAndMaxItem';

const MinAndMaxItems = () => {
	const { item, filterShop, filterProduct } = context.state;
	const itemList = PriceMatrixManager.itemList(
		item, filterShop, filterProduct
	);
	const minAndMax = PriceMatrixManager.getMinAndMax(itemList);

	return <TableBody>{minAndMax.map(MinAndMaxItem)}</TableBody>;
};

export default MinAndMaxItems;
