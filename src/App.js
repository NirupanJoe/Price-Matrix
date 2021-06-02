import { React, useEffect } from 'react';
import './App.css';
import context from './core/context';
import SampleService from './services/sample';
import SimpleButton from './components/simpleButton';
import ItemInput from './components/itemInput';
import PriceInput from './components/priceInput';

const App = () => {
	useEffect(SampleService.sayHai, []);
	// eslint-disable-next-line no-console
	console.log(context.state);

	return (
		<div className="App">
			<div>{ ItemInput() } { PriceInput() }</div>
			<div>{ SimpleButton() }</div>
			<div>Refresh ID: { context.state.refreshID }</div>
		</div>
	);
};

export default App;
