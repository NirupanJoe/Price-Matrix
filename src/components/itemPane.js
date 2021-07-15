import { React } from 'react';
import Item from './item';
import Filter from './filter';
import ThemeSelect from './themeSelect';
import { Box } from '@material-ui/core';
import ItemInput from './itemInput';

const BoxComponent = (component) =>
	<Box key={ component }my={ 2 }> {component}</Box>;

const ItemPane = () => {
	const components = [ItemInput(), Item(), Filter(), ThemeSelect()];

	return <Box id="item-pane">
		{components.map(BoxComponent)}
	</Box>;
};

export default ItemPane;
