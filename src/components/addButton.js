import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { React } from 'react';
import context from '../core/context';

const AddButton = () =>
	<Button
		variant="contained"
		color="secondary"
		size="large"
		disabled={ context.state.price === '' }
		onClick={ context.actions.addItemAndPrice }
		endIcon={ <Add/> }
	>
		Add
	</Button>;

export default AddButton;
