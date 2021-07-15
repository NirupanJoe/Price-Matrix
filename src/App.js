import { React, useEffect } from 'react';
import './App.css';
import context from './core/context';
import SampleService from './services/sample';
import ItemPane from './components/itemPane';
import PriceMatrix from './components/priceMatrix';
import { Box, Grid } from '@material-ui/core';

const App = () => {
	useEffect(SampleService.sayHai, []);

	return (
		<Box className={ `App ${ context.state.theme }` }>
			<Grid container="true">
				<Grid item="true"xs={ 6 }> { ItemPane() } </Grid>
				<Grid item="true"xs={ 6 }> { PriceMatrix() } </Grid>
			</Grid>
		</Box>
	);
};

export default App;
