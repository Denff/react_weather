import style from './DayWeather.module.scss';

import React from 'react';

const DetailDay = ({ id, key, date, time, ...props }) => {

    // const imgSrc = 'http://openweathermap.org/img/wn/' + time.weather + '@2x.png';
    // console.log(time);

    // const dayId = id;
    console.log(props);


    // <div className={style.hourList}>
    //     {time.map((hour, k) => {

    //         return (
    //             <AllDayHours
    //                 day={day}
    //                 id={day.i}
    //                 hour={hour}
    //                 key={hour.k}
    //                 time={time}
    //                 date={hour.dt_txt}
    //             />
    //         )


    //     })}
    // </div>



    return (
        // <div>
        //     {HourData.map((hour, k) => {
        // </div>







        <div key={key} className={style.hour}>
            <div className={style.box}>{date}</div>
            <div className={style.box}>{} </div>
            <div className={style.box}>{}</div>
            <div className={style.day__imgBox}>
                {/* <img src={imgSrc} alt="" /> */}
            </div>
        </div>

    );
}

export default DetailDay;

