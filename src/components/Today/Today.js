import React, { useContext } from 'react';
import Context from '../../Context';
import DateTime from '../DateTime/DateTime';

const Today = () => {

    const { city, list } = useContext(Context);

    return (
        <div className="weather-data">
            <div className="weather-data__city">{city}</div>
            <div className="weather-data__box">
                <span className="weather-data__property">
                    <p className="weather-data__title"></p>
                        <DateTime />
                    <p className="weather-data__value">{Math.round(list[0].main.temp)} &deg;</p>
                </span>
            </div>
        </div>
    );
}

export default Today;