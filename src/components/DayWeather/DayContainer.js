import React from 'react';
import DayWeather from './DayWeather';
import DayFullWeather from './DayFullWeather';

export class HourData {
    constructor(data = null) {
        if (null === data) {
            console.exception('HourData error: Data are required.');
        }
        this.dt_txt = data.dt_txt;
        this.main = data.main;
        this.weather = data.weather;
    }
}

export class DayData {
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

const DayContainer = () => {

    return (
        <DayFullWeather />
    );
}

export default DayContainer;