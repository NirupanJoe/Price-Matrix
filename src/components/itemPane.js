import { React } from 'react';
import Product from './productInput';
import PriceInput from './priceInput';
import Item from './item';
import ShopInput from './shopInput';
import ActionButton from './actionButton';
import FilterShop from './filterShop';

const ItemPane = () =>
	<div className="item-pane">
		<div> { ShopInput() } { Product() } { PriceInput() }
			{ ActionButton() }</div>
		<div> { Item() } </div>
		<div> { FilterShop() } </div>
	</div>;

export default ItemPane;
