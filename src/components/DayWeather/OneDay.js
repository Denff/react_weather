import style from './DayWeather.module.scss';

import React from 'react';
import cn from 'classnames';

const OneDay = ({ i, date, temp, description, icon }) => {

    const dayMonthDate = new Date(date).toLocaleDateString([], { day: '2-digit', month: 'long' });
    const imgSrc = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
    const temperature = Math.round(temp);

    return (
        <div key={i} className={cn(style.list__day, style.day)}>
            <div className={style.day__date}>{dayMonthDate}</div>
            <div className={style.day__temp}>{temperature} &deg;</div>
            <div className={style.day__descrip}>{description}</div>
            <div className={style.day__imgBox}>
                <img src={imgSrc} alt="" />
            </div>
        </div>
    );
}

export default OneDay;