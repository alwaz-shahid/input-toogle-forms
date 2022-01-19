import React from 'react'

const Input = ({
    id,
    name,
    label,
    type = 'text',
    classes = '',
    placeholder,
    fullWidth = null,
    isRequired = true,
    minLength = 2,
    maxLength = 50,
    errors,
    register,
    labelTxt = null,
    labelClass = '',
    ...props
},
    ref) => {

    const styles = {
        // width: width == "lg" ? "100%" : "50%",
    }
    return (<>
        {labelTxt && <span className={`${labelClass}`}>{labelTxt}</span>}
        <input
            id={id}
            ref={ref}
            name={name}
            type={type}
            style={styles}
            aria-label={label} className={`py-2 placeholder-gray-400 bg-transparent
             border my-5 border-gray-800 px-2 relative ${fullWidth && fullWidth ? "w-full" : "w-1/2"}  ${classes}`}
            placeholder={placeholder}
            {...register(name, {
                required: {
                    value: isRequired,
                    message: "This is required"
                },
                maxLength: {
                    value: maxLength,
                    message: `Value must be maximum ${maxLength}`
                },
                minLength: {
                    value: minLength,
                    message: `Value must be minimum ${minLength}`
                },
            })} {...props} />
        {/* <p className='absolute -bottom-3 text-red-600'>{
            //If error exists in the textField
            errors[name] && errors[name].message}</p> */}
    </>
    )
}

export default React.forwardRef(Input)
