import style from './Main.module.scss';

import React, { useState } from 'react';
import axios from 'axios';
import Context from '../../Context';
import Header from '../Layout/Header';
import Content from '../Layout/Content';
import Error from '../Error/Error';
import Footer from '../Layout/Footer';

import DaysContainer from '../Days/DaysContainer';
import SearchCity from '../SearchCity/SearchCity';

const Main = ({ apiKey }) => {
    const [list, setList] = useState(null);
    const [city, setCity] = useState(null);
    const [error, setError] = useState(null);

    const api_call = async e => {
        e.preventDefault();
        const location = e.target.elements.city.value;
        if (!location) {
            return setError('Пожалуйста, введите город'), setList(null);
        }
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`;
        const request = axios.get(url);
        const response = await request;
        setError(null);
        setList(response.data.list);
        setCity(response.data.city.name);
    }

    return (
        <div className={style.main}>
            <Header />
            <Content>
                <Context.Provider value={{ api_call, city, setList, list }}>
                    <SearchCity />
                    {error !== null && <p>{<Error error={error} />}</p>}
                    {city !== null && <DaysContainer />}
                </Context.Provider>
                <Footer />
            </Content>
        </div>
    );
}

export default Main;
