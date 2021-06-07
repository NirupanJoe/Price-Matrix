import { React } from 'react';
import context from '../core/context';

const EditButton = () =>
	<button
		disabled={ context.state.edit === null }
		onClick={ context.actions.editItem }
	>
		Edit
	</button>;

export default EditButton;
