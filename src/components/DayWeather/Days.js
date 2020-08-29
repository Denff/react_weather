import style from './DayWeather.module.scss';

import React, { useContext } from 'react';
import Context from '../../Context';
import OneDay from './OneDay';
import { NavLink } from 'react-router-dom';
import DetailDay from './DetailDay';


class HourData {
    constructor(data = null) {
        if (null === data) {
            console.exception('HourData error: Data are required.');
        }
        this.dt_txt = data.dt_txt;
        this.main = data.main;
        this.weather = data.weather;
    }
}

class DayData {
    constructor() {
        this.hourList = [];
        this.data = null;
    }

    addHourData(hourData) {
        if (!(hourData instanceof HourData)) {
            hourData = new HourData(hourData);
        }

        if (null === this.data) {
            this.data = hourData;
        }

        this.hourList.push(hourData);
    }

    hasDayData() {
        return !(null === this.data);
    }
}

const Days= () => {

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

    return (
        <div>
            <div>
                {dayList.map((day, index) => {
                    if (!day.hasDayData() || index !== 0) {
                        return null;
                    }
                    return (
                            <DetailDay
                                day={day}
                                list={day.hourList}
                                
                                id={index}
                                key={day.id}

                            />
                    );
                })
                }
            </div>

            <div className={style.list}>
                {dayList.map((day, index) => {
                    if (!day.hasDayData() || index === 0) {
                        return null;
                    }
                    return (
                        <NavLink to={'/day/' + index} >

                            <OneDay
                                day={day}
                                id={index}
                                key={day.id}
                                date={day.data.dt_txt}
                                temp={day.data.main.temp}
                                description={day.data.weather[0].description}
                                icon={day.data.weather[0].icon}
                            />
                        </NavLink>
                    );
                })
                }
            </div>
        </div>
    );
}

export default Days;