import style from "./DayWeather.module.scss";

import React, { useContext } from "react";
import Context from "../../Context";
import OneDay from "./OneDay";

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

const DayWeather = () => {

    const { list } = useContext(Context);
    var dayList = {};

    list.forEach(item => {
        var day = (new Date(item.dt_txt)).getUTCDate();
        if (undefined === dayList[day]) {
            dayList[day] = new DayData();
        }
        dayList[day].addHourData(item);
    })
    dayList = Object.values(dayList);

    return (
        <div className={style.list}>
            {dayList.map((day, id) => {
                if (!day.hasDayData() || id === 1) {
                    return null;
                }
                return (
                        <OneDay
                            day={day}
                            key={id}
                            date={day.data.dt_txt}
                            temp={day.data.main.temp}
                            description={day.data.weather[0].description}
                            icon={day.data.weather[0].icon}
                        />
                    );
                })
            }
        </div>
    );
}

export default DayWeather;