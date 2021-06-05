import { React } from 'react';

const items = (item) => {
	const { id, product, price, shopName } = item;

	return <tbody key={ id }>
		<tr>
			<td>{ shopName }</td>
			<td>{ product }</td>
			<td>{ price }</td>
		</tr>
	</tbody>;
};

export default items;
