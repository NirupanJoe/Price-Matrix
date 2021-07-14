import { React } from 'react';
import Item from './item';
import FilterShop from './filterShop';
import ThemeSelect from './themeSelect';
import { Box } from '@material-ui/core';
import ItemInput from './itemInput';

const ItemPane = () =>
	<div id="item-pane">
		<Box my={ 2 }> { ItemInput() }</Box>
		<div> { Item() } </div>
		<div> { FilterShop() } </div>
		<div> { ThemeSelect() } </div>
	</div>;

export default ItemPane;
