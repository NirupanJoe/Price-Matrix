/* eslint-disable no-console */
import { rndString } from '@laufire/utils/random';
import config from '../core/config';

const getValue = (
	product, price, shopName
) => ({
	id: rndString(config.refreshIDLength),
	product: product,
	price: parseFloat(price),
	shopName: shopName,
});

const addItemAndPrice = (
	item, product, price, shopName
) => item.concat(getValue(
	product, price, shopName,
));

const getItemCount = (item) => item.length;

const getMin = (item) =>
	item.reduce((accumulator, current) =>
		(accumulator.price < current.price ? accumulator : current), {});

const getMax = (item) =>
	item.reduce((accumulator, current) =>
		(accumulator.price > current.price ? accumulator : current), {});

const getProduct = (items) =>
	[...new Set(items.map((item) => item.product))];

const getMinAndMax = (items) => getProduct(items).map((product) => {
	const shopItems = items
		.filter((item) => item.product === product);

	return {
		product: product,
		min: getMin(shopItems),
		max: getMax(shopItems),
	};
});

const PriceMatrixManager = {
	addItemAndPrice,
	getItemCount,
	getMin,
	getMax,
	getMinAndMax,
};

export default PriceMatrixManager;
