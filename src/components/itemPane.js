import { React } from 'react';
import Product from './productInput';
import PriceInput from './priceInput';
import Item from './item';
import ShopInput from './shopInput';
import ActionButton from './actionButton';
import FilterShop from './filterShop';
import ThemeSelect from './themeSelect';

const ItemPane = () =>
	<div id="item-pane">
		<div> { ShopInput() } { Product() } { PriceInput() }
			{ ActionButton() }</div>
		<div> { Item() } </div>
		<div> { FilterShop() } </div>
		<div> { ThemeSelect() } </div>
	</div>;

export default ItemPane;
