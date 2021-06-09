import { React } from 'react';
import context from '../core/context';
import PriceMatrixManager from '../services/price-matrixManager';
import MinAndMaxProduct from './minAndMaxProduct';

const style = {
	fontWeight: 'bold',
	color: 'red',
};

const MinAndMaxPrice = () => {
	const { item, filterShop, filterProduct } = context.state;
	const itemList = PriceMatrixManager.itemList(
		item, filterShop, filterProduct
	);
	const minAndMax = PriceMatrixManager.getMinAndMax(itemList);

	return <tbody>
		<tr style={ style }>
			<td>Product</td><td>ShopName</td><td>Price</td>
			<td>Product</td><td>ShopName</td><td>Price</td>
		</tr>
		{ minAndMax.map(MinAndMaxProduct)}
	</tbody>;
};

export default MinAndMaxPrice;
