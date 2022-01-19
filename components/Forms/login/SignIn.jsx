import React, { useState } from 'react'
import Form from '../../inputFields/Form'

import { useForm } from 'react-hook-form';
import Input from '../../inputFields/Input';
import Button from '../../inputFields/Button';
import Link from 'next/link';
const SignIn = () => {
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
        <section className='flex flex-col p-6 min-h-screen justify-start items-start'>
            <div className='w-72 my-5 bg-blue-600 rounded-xl text-center p-2 '>Sign in with Facebook</div>
            <div className='w-72 my-5 bg-red-600 rounded-xl text-center p-2 '>Sign in with Gmail</div>
            <div className='w-72 my-5 bg-sky-500 rounded-xl text-center p-2 '>Sign in with Facebook</div>
            <p className='border-b-2 w-72 text-center text-2xl font-semiBold'>OR</p>
            <Form onSubmit={onSubmit} className="py-5">
                <Input
                    id="email"
                    name="email"
                    type="email"
                    label="E-mailAddress"
                    placeholder="E-mailAddress"
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

                <p>
                    <Input
                        id="remember_me"
                        name="remember_me"
                        type="radio"
                        label="Remember Me"
                        placeholder="Remember Me"
                        register={register}
                        errors={errors}
                        fullWidth={true}
                        className="inline-block mr-1"
                    />
                    <span>Remember me</span>
                </p>

                <Button>Sign in</Button>
            </Form>
            {JSON.stringify(test)}

            <div>
                <Link href={"/"}><a className=' py-1 text-xl text-blue-600'>Forgot your password?</a></Link>
                <p className=' py-1 text-xl '>
                    Don’t have an account?
                    <Link href={"/register"}><a className='text-blue-600'> Create one </a></Link>
                    for free.
                </p>
                <p className=' py-1 text-xl'>
                    By signing into your Hire Choices account, you agree and consent to our <a className='text-blue-600'>Privacy Policy</a>  and <a className='text-blue-600'>Terms of Service</a>.
                </p>
            </div>
        </section >
    )
}

export default SignIn
