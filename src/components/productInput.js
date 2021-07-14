import { React } from 'react';
import { MenuItem, FormControl, Select, InputLabel } from '@material-ui/core';
import context from '../core/context';

const Product = (product) =>
	<MenuItem key={ product } value={ product }>{product}</MenuItem>;

const productInput = () =>
	<FormControl variant="outlined">
		<InputLabel id="demo-simple">Product</InputLabel>
		<Select
			labelId="demo-simple"
			id="demo-simple-select-outlined"
			value={ context.state.product }
			onChange={ (evt) => context.actions.addProduct(evt.target.value) }
			label="product"
		>
			{ context.config.products.map(Product) }
		</Select>
	</FormControl>;

export default productInput;
