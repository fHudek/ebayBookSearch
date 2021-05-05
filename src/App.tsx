import React from 'react';
import './styles/App.scss';
import { Switch, Route } from 'react-router';
import Home from './pages/Home';

function App() {
	return (
		<Switch>
			<Route component={Home} />
		</Switch>
	);
}

export default App;
