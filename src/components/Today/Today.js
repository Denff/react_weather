import React, { useContext } from 'react';
import Context from '../../Context';

const Today = () => {

    // const { city, list } = useContext(Context);

    const date = new Date();
    // const nowDate = `${date.toLocaleDateString([], { day: '2-digit', month: 'long' })} - ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    // let temperature = Math.round(list[0].main.temp - 273);

    return (
        <div>
          
        </div>
    );
}

export default Today;





{/* <div className="weather-data">
    <div className="weather-data__city">{city}</div>
    <div className="weather-data__box">
        <span className="weather-data__property">
            <p className="weather-data__title"></p>
            <p className="weather-data__value">{temperature} &deg;</p>
        </span>
    </div>
</div> */}