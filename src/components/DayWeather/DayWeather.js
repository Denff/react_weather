import React, { useContext } from "react"
import Context from "../../Context"
import style from "./DayWeather.module.scss"

const DayWeather = () => {

    const { list } = useContext(Context)

    return (
        <div className={ style.list }>         
            { list !== undefined ? list.map((item, id ) =>  (
                <div key={ id } className={ style.list__day }>
                    <div className={ style.day__date }>{ item.dt_txt }</div>
                    
                    <div className={ style.day__temp }>{ Math.round(item.main.temp) } &deg;</div>
                    <div className={ style.day__descrip }>{ item.weather[0].description }</div>
                    <div className={ style.day__imgBox }>
                        <img src={ "http://openweathermap.org/img/wn/" + item.weather[0].icon + "@2x.png" } />
                    </div>
                    
                </div>
                ))
            : null }
        </div> 
    )
}

export default DayWeather