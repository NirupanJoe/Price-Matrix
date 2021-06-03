import { React, useEffect } from 'react';
import './App.css';
import context from './core/context';
import SampleService from './services/sample';
import AddButton from './components/addButton';
import ItemInput from './components/itemInput';
import PriceInput from './components/priceInput';
import Item from './components/item';

const App = () => {
	useEffect(SampleService.sayHai, []);
	// eslint-disable-next-line no-console
	console.log(context.state);

	return (
		<div className="App">
			<div>{ ItemInput() } { PriceInput() }</div>
			<div>{ AddButton() }</div>
			<div>{ Item() }</div>
			<div>Refresh ID: { context.state.refreshID }</div>
		</div>
	);
};

export default App;
