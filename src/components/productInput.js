/* eslint-disable react/jsx-closing-bracket-location */
import { React } from 'react';
import context from '../core/context';
import Product from './product';

const ItemInput = () => {
	const { products } = context.config;

	return <div>Product: <select
		onChange={ (evt) => context.actions.addProduct(evt.target.value) }>
		 { products.map(Product) }
	</select>
	</div>;
};

export default ItemInput;
