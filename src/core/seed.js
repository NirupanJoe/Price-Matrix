import { rndString } from '@laufire/utils/random';

const refreshIDLength = 4;

const seed = {
	refreshID: rndString(refreshIDLength),
	item: '',
	price: '',
	value: [],
};

export default seed;
