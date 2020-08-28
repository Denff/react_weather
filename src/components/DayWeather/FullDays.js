import style from './DayWeather.module.scss';

import React from 'react';
import DetailDay from './DetailDay';

const FullDays = ({ day, i, date, time, ...props}) => {

    // console.log(time);
    const dayId = i;

    return (
        
        <div className={style.hourList}>
            {time.map((item, k) => {
                
                return (
                    <DetailDay
                        day={day}
                        id={day.i}
                        key={item.k}
                        time={time}
                        date={item.dt_txt}
                    />
                )

            })}
        </div>




    );
}

export default FullDays;



