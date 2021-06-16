import { React } from 'react';
import context from '../core/context';

const AddButton = () =>
	<button
		className="btn"
		disabled={ context.state.price === '' }
		onClick={ context.actions.addItemAndPrice }
	>
		Add
	</button>;

export default AddButton;
