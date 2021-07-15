import { React } from 'react';
import Item from './item';
import Filter from './filter';
import ThemeSelect from './themeSelect';
import { Box } from '@material-ui/core';
import ItemInput from './itemInput';

const ItemPane = () =>
	<div id="item-pane">
		<Box my={ 2 }> { ItemInput() }</Box>
		<div> { Item() } </div>
		<Box my={ 2 }> { Filter() } </Box>
		<Box> { ThemeSelect() } </Box>
	</div>;

export default ItemPane;
