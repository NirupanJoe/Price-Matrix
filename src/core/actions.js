import PriceMatrixManager from '../services/price-matrixManager';

const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const addProduct = ({ data }) => ({
	product: data,
});

const addPrice = ({ data }) => ({
	price: data,
});

const addItemAndPrice = ({ state }) => ({
	price: '',
	item: PriceMatrixManager.addItemAndPrice(
		state.item, state.product, state.price, state.shopName
	),
});

const addShopName = ({ data }) => ({
	shopName: data,
});

const actions = {
	increaseCount,
	addProduct,
	addPrice,
	addItemAndPrice,
	addShopName,
};

export default actions;
