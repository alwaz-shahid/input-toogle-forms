import React from 'react'

const Select = ({
    name,
    options = ["State 1", "State 2", "State 3"],
    isRequired = true,
    errors,
    register,
    classes = "",
    ...props
},
    ref) => {

    return (
        <select className={`py-2 px-4 ${classes}`}
            ref={ref} {...register(name, {
                required: {
                    value: isRequired,
                    message: "This is required"
                },
            })} {...props}>
            {options.map((value, i) => (
                <option key={i} value={value}>{value}</option>
            ))}
        </select>
    )
}

export default React.forwardRef(Select)
