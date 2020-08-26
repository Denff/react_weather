import React from "react"
import style from "./Layout.module.scss"

const Content = props => (
    <div className={ style.content }>
        { props.children }
    </div>
)

export default Content