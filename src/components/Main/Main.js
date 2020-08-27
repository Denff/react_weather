import React, { useState } from "react"
import axios from "axios";
import Context from "../../Context"
import Header from "../Layout/Header"
import Content from "../Layout/Content"
import DateTime from "../DateTime/DateTime"
import WeatherSearch from "../CitySearchForm/CitySearchForm"
import WeatherData from "../Weather/WeatherData"
import Error from "../Error/Error"
import Footer from "../Layout/Footer"
import DayWeather from "../DayWeather/DayWeather";
import style from "./Main.module.scss"

const API_KEY = "e659141f96cf034901170e56e6407daa"

const Main = () => {
    const [ list, setList ] = useState(null)
    const [ city, setCity ] = useState(null)
    const [ error, setError ] = useState(null)

    const api_call = async e => {
        e.preventDefault()

        const location = e.target.elements.city.value
        
        if (!location) {
            return setError("Пожалуйста, введите свой город"), setList(null)
        }

        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${ location }&appid=${ API_KEY }&units=metric`

        const request = axios.get(url)
        const response = await request
        setError(null)
        setList(response.data.list)
        setCity(response.data.city.name)

        // console.log(response.data)
    }
    return (
        <div className={ style.main }>
            <Header />
            <Content>
                <Context.Provider value={{ api_call, city, list }}>
                    <WeatherSearch />
                    { error !== null && <p>{ <Error error={ error } /> }</p> }
                    { city !== null && <WeatherData /> }
                    { city !== null && <DayWeather /> }
                </Context.Provider>
                <Footer />
            </Content>
        </div>
    )
}

export default Main
