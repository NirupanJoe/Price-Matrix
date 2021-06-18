import { React } from 'react';
import context from '../core/context';

const items = (item) => {
	const { id, product, price, shopName } = item;

	return <tr key={ id }onClick={ () => context.actions.edit(item) }>
		<td>{ shopName }</td>
		<td>{ product }</td>
		<td>{ price }</td>
	</tr>;
};

export default items;
