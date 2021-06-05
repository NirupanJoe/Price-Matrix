/* eslint-disable react/jsx-closing-bracket-location */
import { React } from 'react';

const ShopName = (shop) => <option
	key={ shop }
	value={ shop }>
	{shop}</option>;

export default ShopName;
