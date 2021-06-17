import { React } from 'react';
import context from '../core/context';
import PriceMatrixManager from '../services/price-matrixManager';
import items from './items';

const Item = () => {
	const { item, filterShop, filterProduct } = context.state;
	const itemList = PriceMatrixManager.itemList(
		item, filterShop, filterProduct
	);
	const noDisplay = PriceMatrixManager.getItemCount(item) === 0;

	return noDisplay
		? null
		: <table className="items-table">
			<thead>
				<tr>
					<th>ShopName</th>
					<th>Product</th>
					<th>Price</th>
				</tr>
			</thead>
			{	itemList.map(items) }
		</table>;
};

export default Item;
