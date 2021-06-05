import { React } from 'react';
import context from '../core/context';

const PriceInput = () =>
	<label>
		price:
		{' '}
		<input
			type="number"
			value={ context.state.price }
			onChange={ (evt) => context.actions.addPrice(evt.target.value) }
		/>
	</label>;

export default PriceInput;
