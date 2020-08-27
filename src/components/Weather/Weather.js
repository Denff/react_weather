import React from "react"
import DateTime from "../DateTime/DateTime"

const Weather = ({ city, list }) => {

    return (
        <div className="weather-data">
            <div className="weather-data__city">{ city }</div>
            <div className="weather-data__box">
                <span className="weather-data__property">
                    <p className="weather-data__title"></p>
                        <DateTime />
                    <p className="weather-data__value">{ Math.round(list[0].main.temp) } &deg;</p>
                </span>
                <span className="weather-data__property">
                    <p className="weather-data__title"></p>
                    <p className="weather-data__value">{ }</p>
                </span>
                <span className="weather-data__property">
                    <p className="weather-data__title"></p>
                    <p className="weather-data__value">{ }</p>
                </span>
            </div>
        </div>
    )
}

export default Weather