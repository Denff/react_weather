import React from "react"
import style from "./NowDateTime.module.scss"

const NowDateTime = () => {
    const date = new Date()
    return (
        <div className={ style.nowDateTime }>
            { `${date.toLocaleDateString([], { day: '2-digit', month: 'long' }) } - ${ date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }` }
        </div>
    )
}

export default NowDateTime