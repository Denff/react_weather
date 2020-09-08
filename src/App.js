import React from 'react';
import Wrapper from './components/Layout/Wrapper';
import Main from './components/Main/Main';
import axios from 'axios';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Context from './Context';

// import OneDay from './components/Days/z---OneDay';
import Login from './components/Login/Login';
import Hour from './components/Days/Hour';

function App() {
	const apiKey = localStorage.getItem('api_key');

	const [list, setList] = React.useState([]);
	const [city, setCity] = React.useState('');

	const getWeather = async (search) => {
		if (!search) {
			setList([]);

			throw new Error('Введите город');
		}

		return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${apiKey}`)
			.then(response => {
				setList(response.data.list);
				setCity(response.data.city.name);
			});
	}

	return (
		<Context.Provider value={{ getWeather, city, list }}>
			<BrowserRouter>
				<Wrapper>
					<Switch>
						<Route exact path="/" render={() => apiKey ? <Main apiKey={apiKey} /> : <Login />} />
						<Route path="/hour/:hourId?" render={({ match: { params: { hourId } } }) => <Hour id={hourId} />} />
					</Switch>
				</Wrapper>
			</BrowserRouter>
		</Context.Provider>
	);
}

export default App;
