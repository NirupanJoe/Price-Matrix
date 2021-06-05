import { React } from 'react';
import context from '../core/context';
import PriceMatrixManager from '../services/price-matrixManager';
import MinAndMaxProduct from './minAndMaxProduct';

const style = {
	fontWeight: 'bold',
	color: 'red',
};

const MinAndMaxPrice = () => {
	const minAndMax = PriceMatrixManager.getMinAndMax(context.state.item);
	// const MinAndMaxProduct = minAndMax.map((item) => item);
	// const { min, max } = MinAndMaxProduct;

	return <tbody>
		<tr style={ style }>
			<td>Product</td><td>ShopName</td><td>Price</td>
			<td>Product</td><td>ShopName</td><td>Price</td>
		</tr>
		{ minAndMax.map(MinAndMaxProduct)}
	</tbody>;
};

// <tr>
// 	<td>{min.shopName}</td><td>{min.product}</td><td>{min.price}</td>
// 	<td>{max.shopName}</td><td>{max.product}</td><td>{max.price}</td>
// </tr>

export default MinAndMaxPrice;
