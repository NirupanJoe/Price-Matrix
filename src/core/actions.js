const increaseCount = ({ state, data }) => ({
	count: state.count + data,
});

const addItem = ({ data }) => ({
	item: data,
});

const addPrice = ({ data }) => ({
	price: data,
});

const actions = {
	increaseCount,
	addItem,
	addPrice,
};

export default actions;
