import { rndString } from '@laufire/utils/random';
import config from '../core/config';

const getValue = (item, price) => ({
	id: rndString(config.refreshIDLength),
	item: item,
	price: parseFloat(price),
});

const addItemAndPrice = (
	value, item, price
) =>
	(item === '' || price === '' ? value : value.concat(getValue(item, price)));

const getItem = (value) => value.length;

const PriceMatrixManager = {
	addItemAndPrice,
	getItem,
};

export default PriceMatrixManager;
