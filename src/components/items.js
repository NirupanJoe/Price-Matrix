import { React } from 'react';

const items = (value) => {
	const { id, item, price } = value;

	return <tbody key={ id }>
		<tr>
			<td>{ item }</td>
			<td>{ price }</td>
		</tr>
	</tbody>;
};

export default items;
