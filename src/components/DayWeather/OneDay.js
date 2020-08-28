import style from './DayWeather.module.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

const OneDay = ({ id, key, day, date, temp, description, icon }) => {

    const dayMonthDate = new Date(date).toLocaleDateString([], { day: '2-digit', month: 'long' });
    const imgSrc = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
    const temperature = Math.round(temp);
    // const dayId = key;
    console.log(date);

    return (
        <div>
            <div className={cn(style.list__day, style.day)}>
                <div className={style.day__date}>{dayMonthDate}</div>
                <div className={style.day__temp}>{temperature} &deg;</div>
                <div className={style.day__descrip}>{description}</div>
                <div className={style.day__imgBox}>
                    <img src={imgSrc} alt="" />
                </div>
            </div>
        </div>
    );
}

export default OneDay;