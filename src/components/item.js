import { React } from 'react';
import context from '../core/context';
import items from './items';

const style = {
	marginLeft: 'auto',
	marginRight: 'auto',
	border: '1px solid black',

};

const Item = () => {
	const { value } = context.state;

	return <table style={ style }>
		<thead>
			<tr>
				<th>Name</th>
				<th>Price</th>
			</tr>
		</thead>
		{	value.map(items) }
	</table>;
};

export default Item;
