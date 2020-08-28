import style from "./Layout.module.scss";

import React from "react";

const Wrapper = (props) => <div className={style.wrapper}>{props.children}</div>;

export default Wrapper;