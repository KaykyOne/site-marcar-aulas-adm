import React from 'react'

export default function RadioButton({id, name, value, text}) {
    return (
        <>
            <input type="radio" id={id} name={name} value={value} />
            <label for={id}>{text}</label>
        </>
    )
}
