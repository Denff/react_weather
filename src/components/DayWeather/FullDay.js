import React from "react"
import style from "./DayWeather.module.scss"

const FullDay = ({ date, temp, description }) => {

    return (
        <div className={ style.fullDay }></div>
    )
}

export default FullDay