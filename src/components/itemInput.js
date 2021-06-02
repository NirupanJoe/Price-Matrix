import { React } from 'react';
import context from '../core/context';

const ItemInput = () =>
	<label>
		Item: <input
			value={ context.state.item }
			onChange={ (evt) => context.actions.addItem(evt.target.value) }
		// eslint-disable-next-line no-mixed-spaces-and-tabs
		      />
	</label>;

export default ItemInput;
