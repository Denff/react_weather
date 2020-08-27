import React from "react"
import style from "./DayWeather.module.scss"
import cn from 'classnames'


const OneDay = ({ date, temp, description, icon}) => {


    const dayMonthDate = new Date( date ).toLocaleDateString([], { day: '2-digit', month: 'long' })
    const imgSrc = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

    return (
        <div className={ cn(style.list__day, style.day) }>
            <div className={style.day__date}>
                {dayMonthDate}

            </div>

            <div className={style.day__temp}>
                {Math.round(temp)} &deg;
                            </div>

            <div className={style.day__descrip}>
                {description}
            </div>

            <div className={style.day__imgBox}>
                <img src={imgSrc} />
            </div>
        </div>
    )
}

export default OneDay