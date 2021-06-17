import { React } from 'react';
import context from '../core/context';

const PriceInput = () =>
	<span>
		<label>
			price:
			{' '}
			<input
				className="price-input"
				placeholder="price"
				type="number"
				value={ context.state.price }
				onChange={ (evt) => context.actions.addPrice(evt.target.value) }
			/>
		</label>
	</span>;

export default PriceInput;
