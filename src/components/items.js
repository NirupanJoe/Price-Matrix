import { React } from 'react';
import context from '../core/context';

const items = (item) => {
	const { id, product, price, shopName } = item;

	return <tbody key={ id }>
		<tr onClick={ () => context.actions.edit(item) }>
			<td>{ shopName }</td>
			<td>{ product }</td>
			<td>{ price }</td>
		</tr>
	</tbody>;
};

export default items;
