/* eslint-disable no-mixed-spaces-and-tabs */
import { React } from 'react';
import context from '../core/context';
import ShopName from './shopName';

const ShopInput = () => {
	const { shopNames } = context.config;

	return <div>Shop Name: <select
		onChange={ (evt) => context.actions.addShopName(evt.target.value) }
	                       >
		 { shopNames.map(ShopName) }
	</select>
	</div>;
};

export default ShopInput;
