import style from './Days.module.scss';

import React, { useContext } from 'react';
import Context from '../../Context';
import OneDay from './z---OneDay';
import { NavLink } from 'react-router-dom';


const Days= () => {

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

        </div>
    );
}

export default Days;