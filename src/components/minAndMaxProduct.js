import { React } from 'react';

const MinAndMaxProduct = (item) => {
	const { product, min, max } = item;

	return <tr key={ product }>
		<td>{min.product}</td><td>{min.shopName}</td><td>{min.price}</td>
		<td>{max.product}</td><td>{max.shopName}</td><td>{max.price}</td>
	</tr>;
};

export default MinAndMaxProduct;
