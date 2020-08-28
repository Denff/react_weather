import React, { useContext } from "react";
import Context from "../../Context";
import Weather from "./Weather";

const WeatherData = () => {
    const {  city, list } = useContext(Context);

    return (
        <Weather city={ city } list={ list }/>
    );
}

export default WeatherData;