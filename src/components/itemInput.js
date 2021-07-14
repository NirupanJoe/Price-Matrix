import { React } from 'react';
import Product from './productInput';
import PriceInput from './priceInput';
import ShopInput from './shopInput';
import ActionButton from './actionButton';
import { Grid } from '@material-ui/core';

const GridItem = (component) =>
	<Grid key={ component } item="true" xs={ 3 }>{ component }</Grid>;

const ItemInput = () => {
	const component = [
		ShopInput(),
		Product(),
		PriceInput(),
		ActionButton(),
	];

	return <Grid container="true">
		{ component.map(GridItem)}
	</Grid>;
};

export default ItemInput;
