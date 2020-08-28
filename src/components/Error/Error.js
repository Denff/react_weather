import React from "react";
import style from "./Error.module.scss";

const Error = ({ error }) => <div className={style.error}>{error}</div>;

export default Error;