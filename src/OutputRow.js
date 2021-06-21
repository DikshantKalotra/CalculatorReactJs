import React from 'react'

export const OutputRow = (props) => {
    return (
        <div className="screen-row">
            <input type="text" readOnly className={props.name} value={props.value}/>
        </div>
    )
}
