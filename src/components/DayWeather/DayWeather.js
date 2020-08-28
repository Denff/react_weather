import style from './DayWeather.module.scss';

import React, { useContext } from 'react';
import Context from '../../Context';
import OneDay from './OneDay';
import { DayData } from './DayContainer';
// import { NavLink } from 'react-router-dom';


const DayWeather = () => {

    const { list } = useContext(Context);
    let dayList = {};

    list.forEach(item => {
        const day = (new Date(item.dt_txt)).getUTCDate();
        if (undefined === dayList[day]) {
            dayList[day] = new DayData();
        }
        dayList[day].addHourData(item);
    })
    dayList = Object.values(dayList);

    dayList.sort(function (a, b) {
        let dateA = new Date(a.data.dt_txt);
        let dateB = new Date(b.data.dt_txt);
        return dateA - dateB;
    })

    // console.log(dayList);

    return (
        <div className={style.list}>
            {dayList.map((day, i) => {
                if (!day.hasDayData() || i === 0 ) {
                    return null;
                }
                return (
                    // <NavLink to={'/day/' + i}>
                        <OneDay
                            day={day}
                            key={i}
                            date={day.data.dt_txt}
                            temp={day.data.main.temp}
                            description={day.data.weather[0].description}
                            icon={day.data.weather[0].icon}
                        />
                    // </NavLink>

                    );
                })
            }
        </div>
    );
}

export default DayWeather;