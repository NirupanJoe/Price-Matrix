import context from '../core/context';
import PriceMatrixManager from '../services/price-matrixManager';
import ItemTable from './itemTable';

const Item = () => {
	const noDisplay = PriceMatrixManager.getItemCount(context.state.item) === 0;

	return noDisplay
		? null
		: ItemTable();
};

export default Item;
