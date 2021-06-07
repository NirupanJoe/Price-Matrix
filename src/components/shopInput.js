import { React } from 'react';
import context from '../core/context';

const ShopName = (shop) => <option key={ shop } value={ shop }>{shop}</option>;

const ShopInput = () =>
	<span>
		<label> Shop Name: </label>
		<select
			value={ context.state.shopName }
			onChange={ (evt) => context.actions.addShopName(evt.target.value) }
		>
			{ context.config.shopNames.map(ShopName) }
		</select>
	</span>;

export default ShopInput;
