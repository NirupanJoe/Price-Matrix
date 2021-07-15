import { React } from 'react';
import { Grid } from '@material-ui/core';
import context from '../core/context';
import PriceMatrixManager from '../services/price-matrixManager';
import FilterProduct from './filterProduct';
import FilterShop from './filterShop';

const GridItem = (item) =>
	<Grid key={ item } item="true" xs={ 3 }>{ item }</Grid>;

const Filter = () => {
	const noFilter = PriceMatrixManager.getItemCount(context.state.item) === 0;
	const component = [FilterShop(), FilterProduct()];

	return noFilter
		? null
		: <Grid container="true" justifyContent="center">
			{ component.map(GridItem)}
		</Grid>;
};

export default Filter;
