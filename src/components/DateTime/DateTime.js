import style from "./NowDateTime.module.scss";

import React from "react";

const NowDateTime = () => {

    const date = new Date();
    const nowDate = `${date.toLocaleDateString([], { day: '2-digit', month: 'long' })} - ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`

    return <div className={style.nowDateTime}>{nowDate}</div>;
}

export default NowDateTime;