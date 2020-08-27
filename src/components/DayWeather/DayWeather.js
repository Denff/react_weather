import React, { useContext } from "react"
import Context from "../../Context"
import style from "./DayWeather.module.scss"
import OneDay from "./OneDay"

class HourData {
    constructor(data = null) {
        if (null === data) {
            console.exception('HourData error: Data are required.')
        }
        this.dt_txt = data.dt_txt
        this.main = data.main
        this.weather = data.weather
    }

    getDateText() {
        return (new Date(this.dt_txt)).toLocaleDateString([], { day: '2-digit', month: 'long' })
    }
}

class DayData {
    constructor() {
        this.hourList = []
        this.data = null
    }

    addHourData(hourData) {
        if (!(hourData instanceof HourData)) {
            hourData = new HourData(hourData)
        }

        if (null === this.data) {
            this.data = hourData
        }

        this.hourList.push(hourData)
    }

    hasDayData() {
        return !(null === this.data)
    }
}

const DayWeather = () => {
    const { list } = useContext(Context)
    var dayList = {}

    list.forEach(item => {
        var day = (new Date(item.dt_txt)).getUTCDate()
        if (undefined === dayList[day]) {
            dayList[day] = new DayData()
        }

        dayList[day].addHourData(item)
    })

    dayList = Object.values(dayList)
    console.log(dayList)


    return (
        <div className={style.list}>
            { dayList.map((day, index) => {
                    if (!day.hasDayData() || index === 1) {
                        return null;
                    }
                    
                    return (
               
                            <OneDay
                                day={day}
                                key={index}
                                date={day.data.dt_txt}
                                temp={day.data.main.temp}
                                description={day.data.weather[0].description}
                                icon={day.data.weather[0].icon}
                            />

       
                        



                        // <div key={index} className={style.list__day}>
                        //     <div className={style.day__date}>
                            
                        //         {day.data.dt_txt}
                        //     </div>

                        //     <div className={style.day__temp}>
                        //         {Math.round(day.data.main.temp)} &deg;
                        //     </div>

                        //     <div className={style.day__descrip}>
                        //         {day.data.weather[0].description}
                        //     </div>
                        // </div>
                    )
                })
            }
        </div>
    )
}

export default DayWeather