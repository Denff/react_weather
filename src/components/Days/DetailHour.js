import style from './Days.module.scss';

import React from 'react';
import Hour from './Hour';

const DetailHour = ({ list }) => {

    return (
        <div className={style.hourList}>
            {list.map((hour, k) => {

                return (
                    <Hour
                        list={list}
                        date={hour.dt_txt}
                        temp={hour.main.temp}
                        icon={hour.weather[0].icon}
                        weather={hour.weather[0].main}
                    />
                )
            })}
        </div>
    );
}

export default DetailDay;

