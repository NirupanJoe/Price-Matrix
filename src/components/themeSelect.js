import { React } from 'react';
import { MenuItem, FormControl, Select, InputLabel } from '@material-ui/core';
import context from '../core/context';

const ThemeOption = (theme) =>
	<MenuItem key={ theme } value={ theme }>
		{theme}
	</MenuItem>;

const ThemeSelect = () =>
	<FormControl variant="outlined">
		<InputLabel id="demo-simple">Theme</InputLabel>
		<Select
			labelId="demo-simple"
			id="demo-simple-select-outlined"
			label="Theme"
			value={ context.state.theme }
			onChange={ (evt) => context.actions.themeSelect(evt.target.value) }
		>
			{ context.config.themes.map(ThemeOption)}
		</Select>
	</FormControl>;

export default ThemeSelect;
