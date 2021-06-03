import { React } from 'react';
import context from '../core/context';
import PriceMatrixManager from '../services/price-matrixManager';

const style = {
	fontWeight: 'bold',
	color: 'red',
};

const MinAndMaxPrice = () => {
	const Minimum = PriceMatrixManager.getMin(context.state.value);
	const Maximum = PriceMatrixManager.getMax(context.state.value);

	return <tbody>
		<tr style={ style }>
			<td>Name</td>
			<td>Price</td>
			<td>Name</td>
			<td>Price</td>
		</tr>
		<tr>
			<td>{ Minimum.item }</td>
			<td> { Minimum.price } </td>
			<td>{ Maximum.item } </td>
			<td> { Maximum.price } </td>
		</tr>
	</tbody>;
};

export default MinAndMaxPrice;
