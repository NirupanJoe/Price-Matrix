import { TextField } from '@material-ui/core';
import { React } from 'react';
import context from '../core/context';

const PriceInput = () =>

	<TextField
		id="outlined-number"
		label="Price"
		type="number"
		value={ context.state.price }
		onChange={ (evt) => context.actions.addPrice(evt.target.value) }
		variant="outlined"
	/>;

export default PriceInput;
