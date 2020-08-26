import React from "react"
import style from "./Layout.module.scss"


const Wrapper = props => (
    <div className={ style.wrapper }>
        { props.children }
    </div>
)

export default Wrapper