import style from './Layout.module.scss';


import React from 'react';

const Header = () => (
    <header className={style.header}>
        <div className="inner">
            <h1 className={style.header__title}>Прогноз погоды на 5 дней</h1>
        </div>
        
    </header>
);

export default Header;