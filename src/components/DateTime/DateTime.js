import React from "react"

const DateTime = () => {
    const date = new Date()
    return (
        <div className="date-time">
            {`${date.toLocaleDateString([], { day: '2-digit', month: 'long' })} - ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
        </div>
    )
}

export default DateTime