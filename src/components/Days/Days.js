
import React, { useContext } from 'react';
import Context from '../../Context';
import Today from '../Today/Today';
import Hours from './Hours';



const Days= () => {

    const { list, city } = useContext(Context);

    return (
        <div>
            <Today />
            <Hours />
        </div>
    );
}

export default Days;