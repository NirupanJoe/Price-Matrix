import { MenuItem, FormControl, Select, InputLabel } from '@material-ui/core';
import { React } from 'react';
import context from '../core/context';

const ShopName = (shop) =>
	<MenuItem key={ shop } value={ shop }>{shop}</MenuItem>;

const ShopInput = () =>

	<FormControl variant="outlined">
		<InputLabel id="demo-simple">ShopName</InputLabel>
		<Select
			labelId="demo-simple"
			id="demo-simple-select-outlined"
			value={ context.state.shopName }
			onChange={ (evt) => context.actions.addShopName(evt.target.value) }
			label="Shop Name"
		>
			{ context.config.shopNames.map(ShopName) }
		</Select>
	</FormControl>;

export default ShopInput;
