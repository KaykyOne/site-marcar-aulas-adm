import React from 'react'

export default function ButtonBack({ children, onClick, style = null }) {
    return (
        <div onClick={onClick} className='container-horizontal buttonBack'>
            <span className={`material-icons ${style == 1 ? 'text-white' : ''}`}>
                arrow_back
            </span>
            <a className={style == 1 ? 'text-white' : ''}>{children}</a>
        </div>
    )
}
