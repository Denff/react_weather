import style from './Main.module.scss';

import React from 'react';
import Header from '../Layout/Header';
import Content from '../Layout/Content';
import Footer from '../Layout/Footer';

import Hours from '../Days/Hours';
import SearchCity from '../SearchCity/SearchCity';

const Main = () => {
    return (
        <div className={style.main}>
            <Header />
            <Content>
                <SearchCity />
                <Hours />
                <Footer />
            </Content>
        </div>
    );
}

export default Main;
