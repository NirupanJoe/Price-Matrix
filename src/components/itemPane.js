import { React } from 'react';
import AddButton from './addButton';
import ItemInput from './itemInput';
import PriceInput from './priceInput';
import Item from './item';

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
		<div>{ ItemInput() } { PriceInput() }</div>
		<div>{ AddButton() }</div>
		<div> { Item() } </div>
	</div>;

export default ItemPane;
