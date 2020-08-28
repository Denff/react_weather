import React, { Component } from 'react';
import Wrapper from './components/Layout/Wrapper';
import Main from './components/Main/Main';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FullDay from './components/DayWeather/FullDay';

class App extends Component {

	render(){
		return (
			<BrowserRouter>
				<Wrapper>
					<Switch>
						<Route path="/" render={() => <Main />} />
						{/* <Route path="/day/:dayId?" render={({ match: { params: { dayId }}}) => <FullDay id={dayId} />} /> */}
						<Route path="/day/:dayId?" render={props => <FullDay {...props} />} />
					</Switch>

				</Wrapper>
			</BrowserRouter>
		);
	}

}

export default App;
