import { rndString } from '@laufire/utils/random';
import config from '../core/config';

const getValue = (item, price) => ({
	id: rndString(config.refreshIDLength),
	item: item,
	price: price,
});

const addItemAndPrice = (
	value, item, price
) =>
	(item === '' || price === '' ? value : value.concat(getValue(item, price)));

const PriceMatrixManager = {
	addItemAndPrice,
};

export default PriceMatrixManager;
