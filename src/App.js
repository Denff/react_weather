import React, { Component } from 'react';
import Wrapper from './components/Layout/Wrapper';
import Main from './components/Main/Main';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import OneDay from './components/DayWeather/OneDay';
import ApiKeyFormC from './components/ApiKeyForm/ApiKeyFromC';



class App extends Component {

	render(){
		// const apiKey = localStorage.getItem('api_key');
		const apiKey = 'e659141f96cf034901170e56e6407daa';

		return (
			<BrowserRouter>
				<Wrapper>
					<Switch>
						{/* <Route exact path="/" render={() => apiKey ? <Main apiKey={apiKey} /> : <ApiKeyFormC />} /> */}
						<Route exact path="/" render={() => <Main apiKey={apiKey} />} />
						<Route path="/day/:dayId?" render={({ match: { params: { dayId } } }) => <OneDay id={dayId} />} />
						
					</Switch>

				</Wrapper>
			</BrowserRouter>
		);
	}

}

export default App;
