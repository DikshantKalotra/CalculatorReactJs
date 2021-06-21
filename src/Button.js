import React from 'react'

export const Button = (props) => {
    return (
        <input type="button" value={props.label} onClick={props.calculate}/>
    )
}
