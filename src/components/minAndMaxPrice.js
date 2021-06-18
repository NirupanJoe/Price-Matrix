import { React } from 'react';
import context from '../core/context';
import PriceMatrixManager from '../services/price-matrixManager';
import MinAndMaxProduct from './minAndMaxProduct';

const MinAndMaxPrice = () => {
	const { item, filterShop, filterProduct } = context.state;
	const itemList = PriceMatrixManager.itemList(
		item, filterShop, filterProduct
	);
	const minAndMax = PriceMatrixManager.getMinAndMax(itemList);

	return <tbody>
		<tr>
			<th>Product</th><th>ShopName</th><th>Price</th>
			<th>Product</th><th>ShopName</th><th>Price</th>
		</tr>
		{ minAndMax.map(MinAndMaxProduct)}
	</tbody>;
};

export default MinAndMaxPrice;
