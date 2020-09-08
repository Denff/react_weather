import React, { useContext } from 'react';
import Context from '../../Context';

const Today = () => {

    const { city, list } = useContext(Context);

    return (
        <div className="inner">
            <span>{city}</span>

        </div>
    );
}

export default Today;


