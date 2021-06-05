import PriceMatrixManager from '../services/price-matrixManager';

const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const addItem = ({ data }) => ({
	product: data,
});

const addPrice = ({ data }) => ({
	price: data,
});

const addItemAndPrice = ({ state }) => ({
	product: '',
	price: '',
	shopName: '',
	item: PriceMatrixManager.addItemAndPrice(
		state.item, state.product, state.price, state.shopName
	),
});

const addShopName = ({ data }) => ({
	shopName: data,
});

const actions = {
	increaseCount,
	addItem,
	addPrice,
	addItemAndPrice,
	addShopName,
};

export default actions;
