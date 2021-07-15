import { React } from 'react';
import { MenuItem, FormControl, Select, InputLabel } from '@material-ui/core';
import context from '../core/context';

const shopName = (shop) =>
	<MenuItem key={ shop } value={ shop }>
		{shop}
	</MenuItem>;

const FilterShop = () => {
	const	filterShop = ['All', ...context.config.shopNames];

	return <FormControl variant="outlined">
		<InputLabel id="demo-simple">ShopName</InputLabel>
		<Select
			labelId="demo-simple"
			id="demo-simple-select-outlined"
			label="Shop Name"
			value={ context.state.filterShop }
			onChange={ (evt) => context.actions
				.filterShop(evt.target.value) }
		>{ filterShop.map(shopName)}
		</Select>
	</FormControl>;
};

export default FilterShop;
