import { React } from 'react';
import context from '../core/context';
import PriceMatrixManager from '../services/price-matrixManager';
import FilterProduct from './filterProduct';

const shopName = (shop) =>
	<option key={ shop } value={ shop }>
		{shop}
	</option>;

const FilterShop = () => {
	const noFilter = PriceMatrixManager.getItemCount(context.state.item) === 0;

	const	filterShop = ['All', ...context.config.shopNames];

	return noFilter
		? null
		:	<div>
			<label> Shop: </label>
			<select
				value={ context.state.filterShop }
				onChange={ (evt) => context.actions
					.filterShop(evt.target.value) }
			>{ filterShop.map(shopName)}
			</select>
			{ FilterProduct() }
		</div>;
};

export default FilterShop;
