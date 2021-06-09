import { React } from 'react';
import Product from './productInput';
import PriceInput from './priceInput';
import Item from './item';
import ShopInput from './shopInput';
import ActionButton from './actionButton';
import FilterShop from './filterShop';

const style = {
	position: 'absolute',
	top: 0,
	left: 0,
	minHeight: '100%',
	width: '50%',
	background: '#ffe7e7',
};

const ItemPane = () =>
	<div style={ style }>
		<div> { ShopInput() } { Product() }</div>
		<div> { PriceInput() } { ActionButton() } </div>
		<div> { Item() } </div>
		<div> { FilterShop() } </div>
	</div>;

export default ItemPane;
