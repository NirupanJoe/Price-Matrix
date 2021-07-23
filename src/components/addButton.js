import { Button, Tooltip } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { React } from 'react';
import context from '../core/context';

const AddButton = () =>
	<Tooltip title="Add">
		<Button
			variant="contained"
			color="secondary"
			size="large"
			disabled={ context.state.price === '' }
			onClick={ context.actions.addItemAndPrice }
			endIcon={ <Add/> }
		>
			Add
		</Button>
	</Tooltip>;

export default AddButton;
