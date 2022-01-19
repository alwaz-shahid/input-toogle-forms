import React, { useState } from 'react'
import Input from '../../inputFields/Input'
import { useForm } from 'react-hook-form';
import Button from '../../inputFields/Button';
import Form from '../../inputFields/Form';
import Select from '../../inputFields/Select';

const Registration = () => {
    const [test, setTest] = useState({})
    const {
        register,
        handleSubmit,
        formState: { errors }, reset
    } = useForm()

    const onSubmit = handleSubmit((data) => {
        console.log(JSON.stringify(data));
        setTest(data)
        // reset({
        //     firstName: ""
        // })
    })

    return (
        <div className='min-w-full min-h-screen flex-col items-center justify-start'>


            <Form onSubmit={onSubmit} className="flex flex-col flex-wrap items-center justify-center w-4/5 mx-auto">
                <div className='flex flex-1 justify-between min-w-full'>
                    <Input
                        id="first_name"
                        name="first_name"
                        label="First Name"
                        placeholder="First Name"
                        register={register}
                        errors={errors}
                        fullWidth={false}
                        classes=" mr-1"
                    />
                    <Input
                        id="last_name"
                        name="last_name"
                        label="Last Name"
                        placeholder="Last Name"
                        register={register}
                        errors={errors}
                        fullWidth={false}
                        classes=" ml-1"
                    />

                </div>
                <Input
                    id="position_title"
                    name="position_title"
                    label="Position Title"
                    placeholder="Position Title"
                    register={register}
                    errors={errors}
                    fullWidth={true}
                />
                <Input
                    id="company_name"
                    name="company_name"
                    label="Company Name"
                    placeholder="Company Name"
                    register={register}
                    errors={errors}
                    fullWidth={true}
                />
                <div className='flex flex-1 min-w-full items-center justify-between'>

                    <Input
                        id="city"
                        name="city"
                        label="City"
                        placeholder="City"
                        register={register}
                        errors={errors}
                        // className="mr-1 w-/"
                        classes="w-8/12"
                    />

                    <Select name="state" register={register} classes="p-2" />
                    <Input
                        id="zip_code"
                        name="zip_code"
                        label="Zip Code"
                        placeholder="Zip Code"
                        register={register}
                        errors={errors}
                        fullWidth={true}
                        classes="w-1/5"

                    />
                </div>
                <Input
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    placeholder="Phone Number"
                    register={register}
                    errors={errors}
                    fullWidth={true}
                />
                <Input
                    id="email"
                    name="email"
                    type="email"
                    label="E-mail"
                    placeholder="E-mail"
                    register={register}
                    errors={errors}
                    fullWidth={true}
                />
                <Input
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    register={register}
                    errors={errors}
                    fullWidth={true}
                />
                {/* <Input
                    id="consfirm_password"
                    name="consfirm_password"
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    register={register}
                    errors={errors}
                    fullWidth={true}
                /> */}
                <Button className="py-3 px-7 m-4 text-white font-bold bg-green-500 self-start" type="submit">Start Posting</Button>
            </Form>
            {JSON.stringify(test)}
        </div>
    )
}

export default Registration
