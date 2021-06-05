import { React } from 'react';
import context from '../core/context';

const Product = (product) =>
	<option key={ product } value={ product }>{product}</option>;

const productInput = () =>
	<span>
		<label> Product: </label>
		<select
			onChange={ (evt) => context.actions.addProduct(evt.target.value) }
		>
			{ context.config.products.map(Product) }
		</select>
	</span>;

export default productInput;
