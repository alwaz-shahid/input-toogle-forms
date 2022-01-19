import React from 'react'

const Button = ({ children, classes = "", ...props }) => {
    return (
        <button className={`py-2  border-2 my-5 rounded px-4 bg-slate-200 font-bold ${classes}`} {...props}>
            {children}
        </button>
    )
}

export default Button
