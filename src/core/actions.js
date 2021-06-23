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

const edit = ({ data }) => ({
	shopName: data.shopName,
	product: data.product,
	price: data.price,
	edit: data,
});

const editItem = ({ state }) => ({
	price: '',
	edit: null,
	item: PriceMatrixManager.editItem(
		state.item, state.shopName, state.product, state.price, state.edit
	),
});

const filterShop = ({ data }) => ({
	filterShop: data,
});

const filterProduct = ({ data }) => ({
	filterProduct: data,
});

const themeSelect = ({ data }) => ({
	theme: data,
});

const actions = {
	increaseCount,
	addProduct,
	addPrice,
	addItemAndPrice,
	addShopName,
	edit,
	editItem,
	filterShop,
	filterProduct,
	themeSelect,
};

export default actions;
