import { React, useEffect } from 'react';
import './App.css';
import context from './core/context';
import SampleService from './services/sample';
import ItemPane from './components/itemPane';
import PriceMatrix from './components/priceMatrix';

const App = () => {
	useEffect(SampleService.sayHai, []);
	// eslint-disable-next-line no-console
	console.log(context.state);

	return (
		<div className={ `App ${ context.state.theme }` }>
			<div> { ItemPane() } </div>
			<div> { PriceMatrix() } </div>
		</div>
	);
};

export default App;
