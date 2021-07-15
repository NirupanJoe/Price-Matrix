import context from '../core/context';
import PriceMatrixManager from '../services/price-matrixManager';
import PriceMatrixTable from './priceMatrixTable';

const MinAndMaxDisplay = () => {
	const noDisplay = PriceMatrixManager
		.getItemCount(context.state.item) === 0;

	return noDisplay
		? null
		: PriceMatrixTable();
};

export default MinAndMaxDisplay;
