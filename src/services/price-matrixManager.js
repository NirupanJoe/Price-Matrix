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

const getItemCount = (value) => value.length;

const getMin = (data) =>
	data.reduce((accumulator, current) =>
		(accumulator.price < current.price ? accumulator : current), {});

const getMax = (data) =>
	data.reduce((accumulator, current) =>
		(accumulator.price > current.price ? accumulator : current), {});

const PriceMatrixManager = {
	addItemAndPrice,
	getItemCount,
	getMin,
	getMax,
};

export default PriceMatrixManager;
