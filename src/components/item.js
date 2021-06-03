import { React } from 'react';
import context from '../core/context';
import PriceMatrixManager from '../services/price-matrixManager';
import items from './items';

const style = {
	marginLeft: 'auto',
	marginRight: 'auto',
	border: '1px solid black',

};

const Item = () => {
	const { value } = context.state;
	const noDisplay = PriceMatrixManager.getItem(value) === 0;

	return noDisplay
		? null
		: <table style={ style }>
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
