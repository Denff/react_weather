import React, { Component } from 'react';
import Wrapper from './components/Layout/Wrapper';
import Main from './components/Main/Main';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import FullDay from './components/DayWeather/FullDays';
import OneDay from './components/DayWeather/OneDay';
import DetailDay from './components/DayWeather/DetailDay';
// import AllDayHours from './components/DayWeather/AllDayHours';

class App extends Component {

	render(){
		return (
			<BrowserRouter>
				<Wrapper>
					<Switch>
						<Route exact path="/" render={() => <Main />} />
						<Route path="/day/:dayId?" render={({ match: { params: { dayId } } }) => <DetailDay id={dayId} />} />
						{/* <Route path="/day/:dayId?" render={({ match: { params: { dayId }) => <FullDay id={dayId} />} /> */}
						
					</Switch>

				</Wrapper>
			</BrowserRouter>
		);
	}

}

export default App;
