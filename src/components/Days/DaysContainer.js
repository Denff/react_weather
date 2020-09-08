
import React, { useContext } from 'react';
import Context from '../../Context';

import Today from '../Today/Today';
import Days from './Days';



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

const DaysContainer = () => {

    const { list } = useContext(Context);
    let dayList = {};

    list.forEach(item => {
        const day = (new Date(item.dt_txt)).getUTCDate();
        if (undefined === dayList[day]) {
            dayList[day] = new DayData();
        }
        dayList[day].addHourData(item);
    });
    dayList = Object.values(dayList);

    dayList.sort(function (a, b) {
        let dateA = new Date(a.data.dt_txt);
        let dateB = new Date(b.data.dt_txt);
        return dateA - dateB;
    });

    return (
        <div>
            <Today dayList={dayList}/>
            <Days dayList={dayList}/>
        </div>
    );
}

export default DaysContainer;