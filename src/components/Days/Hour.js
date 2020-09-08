import style from './Days.module.scss';
// import moment from 'moment';
import React from 'react';

const Hour = ({ temp, date, icon, weather }) => {

    const timeDate = new Date(date).toLocaleTimeString([], { day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit' });
    // const timeDate = moment(date).format('D MMMM, h:mm');
    const imgSrc = 'http://openweathermap.org/img/wn/' + icon + '@2x.png';
    const temperature = Math.round(temp - 273);

    return (
        <div className={style.hour}>
            <div className={style.hour__date}>{timeDate}</div>
            <div className={style.hour__temp}>{temperature} &deg;</div>
            <div className={style.hour__img}><img src={imgSrc} alt=""/></div>
            <div className={style.hour__weather}>{weather}</div>
        </div>
    );
}

export default Hour;

