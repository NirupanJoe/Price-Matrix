import { Button } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { React } from 'react';
import context from '../core/context';

const EditButton = () =>
	<Button
		variant="outlined"
		color="primary"
		size="large"
		disabled={ context.state.edit === null }
		onClick={ context.actions.editItem }
		startIcon={ <Edit/> }
	>
		Edit
	</Button>;

export default EditButton;
