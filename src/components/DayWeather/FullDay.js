import style from "./DayWeather.module.scss";

import React from "react";

const FullDay = ({ date, temp, description }) => {
    return (
        <div className={style.fullDay}></div>
    )
}

export default FullDay;