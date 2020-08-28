import style from './DayWeather.module.scss';

import React, { useContext } from 'react';
import Context from '../../Context';
import FullDay from './FullDay';
import { DayData } from './DayContainer';


const DayFullWeather = () => {

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
            {dayList.map(day => {
                if (!day.hasDayData()) {
                    return null;
                }
                return (
                    <FullDay
                        day={day}
                        key={day.id}
                        time={day.hourList}
                    />
                );
            })
            }
        </div>
    );
}

export default DayFullWeather;