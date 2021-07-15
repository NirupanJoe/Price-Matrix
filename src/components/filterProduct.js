import { React } from 'react';
import { MenuItem, FormControl, Select, InputLabel } from '@material-ui/core';
import context from '../core/context';

const Product = (product) =>
	<MenuItem key={ product } value={ product }>
		{product}
	</MenuItem>;

const FilterProduct = () => {
	const filterProduct = ['All', ...context.config.products];

	return <FormControl variant="outlined">
		<InputLabel id="demo-simple">Product</InputLabel>
		<Select
			labelId="demo-simple"
			id="demo-simple-select-outlined"
			label="product"
			value={ context.state.filterProduct }
			onChange={ (evt) => context.actions
				.filterProduct(evt.target.value) }
		>{ filterProduct.map(Product)}
		</Select>
	</FormControl>;
};

export default FilterProduct;
