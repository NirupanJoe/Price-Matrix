import config from './config';

const seed = {
	shopName: config.shopNames[0],
	product: config.products[0],
	price: '',
	item: [],
	edit: null,
	filterShop: 'All',
	filterProduct: 'All',
	theme: config.themes[0],
};

export default seed;
