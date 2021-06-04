import { React } from 'react';

const items = (value) => {
	const { id, item, price, shopName } = value;

	return <tbody key={ id }>
		<tr>
			<td>{ shopName }</td>
			<td>{ item }</td>
			<td>{ price }</td>
		</tr>
	</tbody>;
};

export default items;
