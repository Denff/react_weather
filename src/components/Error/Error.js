import style from './Error.module.scss';

import React from 'react';

const Error = ({ error }) => <div className={style.error}>{error}</div>;

export default Error;