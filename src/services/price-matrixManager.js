import { rndString } from '@laufire/utils/random';
import config from '../core/config';

const getValue = (
	item, price, shopName
) => ({
	id: rndString(config.refreshIDLength),
	item: item,
	price: parseFloat(price),
	shopName: shopName,
});

const addItemAndPrice = (
	value, item, price, shopName
) => value.concat(getValue(
	item, price, shopName
));

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
