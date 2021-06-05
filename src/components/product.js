/* eslint-disable react/jsx-closing-bracket-location */
import { React } from 'react';

const Product = (product) => <option
	key={ product }
	value={ product }>
	{product}</option>;

export default Product;
