import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	refreshID: rndString(refreshIDLength),
	shopName: '',
	product: '',
	price: '',
	item: [],
};

export default seed;
