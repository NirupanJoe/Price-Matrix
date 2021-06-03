import { React } from 'react';
import context from '../core/context';
import PriceMatrixManager from '../services/price-matrixManager';
import MinAndMaxPrice from './minAndMaxPrice';

const style = {
	marginLeft: 'auto',
	marginRight: 'auto',
	border: '1px solid black',

};

const MinAndMaxDisplay = () => {
	const noDisplay = PriceMatrixManager
		.getItemCount(context.state.value) === 0;

	return noDisplay
		? null
		:	<table style={ style }>
			<thead>
				<tr>
					<th colSpan="2">Minimum</th>
					<th colSpan="2">Maximum</th>
				</tr>
			</thead>
			{ MinAndMaxPrice() }
		</table>;
};

export default MinAndMaxDisplay;
