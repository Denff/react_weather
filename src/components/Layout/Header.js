import React from 'react'
import style from "./Layout.module.scss"

const Header = () => (
    <div className={ style.header }>
        <h1 className={ style.header__title }>Прогноз погоды на 5 дней</h1>
    </div>
)

export default Header