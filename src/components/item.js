import { React } from 'react';
import context from '../core/context';
import PriceMatrixManager from '../services/price-matrixManager';
import items from './items';

const style = {
	marginLeft: 'auto',
	marginRight: 'auto',
	border: '1px solid black',
	width: '35%',
	marginTop: '1rem',

};

const Item = () => {
	const { item } = context.state;
	const noDisplay = PriceMatrixManager.getItemCount(item) === 0;

	return noDisplay
		? null
		: <table style={ style }>
			<thead>
				<tr>
					<th>ShopName</th>
					<th>Product</th>
					<th>Price</th>
				</tr>
			</thead>
			{	item.map(items) }
		</table>;
};

export default Item;
