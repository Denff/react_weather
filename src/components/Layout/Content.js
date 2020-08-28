import style from "./Layout.module.scss";

import React from "react";

const Content = (props) => <div className={style.content}>{props.children}</div>;

export default Content;