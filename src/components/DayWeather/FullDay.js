import style from './DayWeather.module.scss';

import React from 'react';

const FullDay = ({ i, time, ...props}) => {


    const dayId = i;

    // const imgSrc = 'http://openweathermap.org/img/wn/' + time.weather + '@2x.png';
    // console.log(time);


    console.log(props);
    return (
        <div key={dayId} className={style.hourList}>
            {time.map((hour, k) => {
                return (
                    <div key={k} className={style.hour}>
                        <div className={style.box}>{hour.dt_txt}</div>
                        <div className={style.box}>{} </div>
                        <div className={style.box}>{}</div>
                        <div className={style.day__imgBox}>
                            {/* <img src={imgSrc} alt="" /> */}
                        </div>
                    </div>
                )


            })}
        </div>




    );
}

export default FullDay;



