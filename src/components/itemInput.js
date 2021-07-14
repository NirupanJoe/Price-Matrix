import { React } from 'react';
import Product from './productInput';
import PriceInput from './priceInput';
import ShopInput from './shopInput';
import ActionButton from './actionButton';
import { Grid } from '@material-ui/core';

const ItemInput = () =>
	<Grid container="true">
		<Grid item="true" xs={ 3 }>{ ShopInput() }</Grid>
		<Grid item="true" xs={ 3 }>{ Product() }</Grid>
		<Grid item="true" xs={ 3 }>{ PriceInput() }</Grid>
		<Grid item="true" xs={ 3 }>{ ActionButton() }</Grid>
	</Grid>;

export default ItemInput;
