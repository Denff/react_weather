import style from './DayWeather.module.scss';

import React from 'react';
import cn from 'classnames';

const OneDay = ({ day, date, temp, description, icon }) => {

    let dayMonthDate = new Date(date).toLocaleDateString([], { day: '2-digit', month: 'long' });
    let imgSrc = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
    let temperature = Math.round(temp -273);

    return (
        <div>
            <div className={cn(style.list__day, style.day)}>
                <div className={style.day__date}>{dayMonthDate}</div>
                <div className={style.day__temp}>{temperature} &deg;</div>
                <div className={style.day__imgBox}>
                    <img src={imgSrc} alt="" />
                </div>
            </div>
        </div>
    );
}

export default OneDay;