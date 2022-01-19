import React from 'react'

const Form = ({ children, ...props }) => {
    const checkKeyDown = (e) => {
        if (e.code === 'Enter') e.preventDefault();
    };
    return (
        <form onKeyDown={(e) => checkKeyDown(e)}  {...props} >
            {children}
        </form>
    )
}

export default Form
