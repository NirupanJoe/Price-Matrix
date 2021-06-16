import { React } from 'react';
import context from '../core/context';

const Product = (product) =>
	<option key={ product } value={ product }>
		{product}
	</option>;

const FilterProduct = () => {
	const filterProduct = ['All', ...context.config.products];

	return	<span>
		<label> product: </label>
		<select
			className="select-input"
			value={ context.state.filterProduct }
			onChange={ (evt) => context.actions
				.filterProduct(evt.target.value) }
		>{ filterProduct.map(Product)}</select>
	</span>;
};

export default FilterProduct;
