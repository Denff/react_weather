import style from './Layout.module.scss';

import React from 'react';

const Footer = () => {
    return (
            <div className={style.footer}>
            <div className="inner">
                    <div>The app is based on the <a rel="nofollow" target="_black" href="https://openweathermap.org/">openweathermap</a>.</div>
                </div>
            </div>
    );
}

export default Footer;