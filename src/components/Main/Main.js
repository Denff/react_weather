import style from './Main.module.scss';

import React from 'react';
import Header from '../Layout/Header';
import Content from '../Layout/Content';
import Footer from '../Layout/Footer';

import SearchCity from '../SearchCity/SearchCity';
import Days from '../Days/Days';

const Main = () => {
    return (
        <div className={style.main}>
            <Header />
            <Content>
                <SearchCity />
                <Days />
                <Footer />
            </Content>
        </div>
    );
}

export default Main;
