import React, { Component } from 'react';
import Wrapper from './components/Layout/Wrapper';
import Main from './components/Main/Main';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import OneDay from './components/DayWeather/OneDay';
import DetailDay from './components/DayWeather/DetailDay';


class App extends Component {

	render(){
		return (
			<BrowserRouter>
				<Wrapper>
					<Switch>
						<Route exact path="/" render={() => <Main />} />
						<Route path="/day/:id?" render={({ match: { params: { id } } }) => <DetailDay id={id} />} />
						{/* <Route path="/day/:dayId?" render={({ match: { params: { dayId }) => <FullDay id={dayId} />} /> */}
						
					</Switch>

				</Wrapper>
			</BrowserRouter>
		);
	}

}

export default App;
