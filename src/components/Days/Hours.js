
import React, { useContext } from 'react';
import Context from '../../Context';
import Hour from './Hour';
import style from './Days.module.scss';
import { NavLink } from 'react-router-dom';


const Hours = () => {

    const { list } = useContext(Context);
    
    return (
        <div className={style.hourList}>
            {list.map((hour, k) => {

                return (
                    <NavLink to={'/hour/' + k} >
                        <Hour
                            k={k}
                            key={hour.id}
                            date={hour.dt_txt}
                            temp={hour.main.temp}
                            icon={hour.weather[0].icon}
                            weather={hour.weather[0].main}
                        />
                        
                    </NavLink>
                )
            })}
        </div>
    );
}

export default Hours;