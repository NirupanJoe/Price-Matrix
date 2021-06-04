import PriceMatrixManager from '../services/price-matrixManager';

const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const addItem = ({ data }) => ({
	item: data,
});

const addPrice = ({ data }) => ({
	price: data,
});

const addItemAndPrice = ({ state }) => ({
	item: '',
	price: '',
	value: PriceMatrixManager.addItemAndPrice(
		state.value, state.item, state.price
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
