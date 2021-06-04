import { React } from 'react';
import MinAndMaxDisplay from './minAndMaxDisplay';

const style = {
	position: 'absolute',
	top: 0,
	right: 0,
	minHeight: '100%',
	width: '50%',
	background: '#edffe7',
};

const PriceMatrix = () => <div style={ style }> { MinAndMaxDisplay() } </div>;

export default PriceMatrix;
