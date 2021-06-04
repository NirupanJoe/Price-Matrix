import { React } from 'react';
import context from '../core/context';

const ShopInput = () =>
	<label>
		Shop Name: <input
			value={ context.state.shopName }
			onChange={ (evt) => context.actions.addShopName(evt.target.value) }
		// eslint-disable-next-line no-mixed-spaces-and-tabs
		           />
	</label>;

export default ShopInput;
