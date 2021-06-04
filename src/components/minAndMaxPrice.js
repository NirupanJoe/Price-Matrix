import { React } from 'react';
import context from '../core/context';
import PriceMatrixManager from '../services/price-matrixManager';

const style = {
	fontWeight: 'bold',
	color: 'red',
};

const MinAndMaxPrice = () => {
	const Min = PriceMatrixManager.getMin(context.state.value);
	const Max = PriceMatrixManager.getMax(context.state.value);

	return <tbody>
		<tr style={ style }>
			<td>ShopName</td><td>Item</td><td>Price</td>
			<td>ShopName</td><td>Item</td><td>Price</td>
		</tr>
		<tr>
			<td>{ Min.shopName }</td><td>{ Min.item }</td><td>{ Min.price }</td>
			<td>{ Max.shopName }</td><td>{ Max.item }</td><td>{ Max.price }</td>
		</tr>
	</tbody>;
};

export default MinAndMaxPrice;
