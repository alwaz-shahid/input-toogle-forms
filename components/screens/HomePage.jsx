import React, { useState } from 'react'
import Link from 'next/link';
import Form from '../inputFields/Form';
import Input from '../inputFields/Input';
import { useForm } from 'react-hook-form';
import Button from '../inputFields/Button';
const HomePage = () => {
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
        <section className='min-w-full min-h-screen flex-col flex justify-start items-start'>
            <div className='min-w-full p-2 flex justify-between items-center'>
                <p className=''>Hire Choices | Employers</p>
                <p className=''>Post Resume | <Link href={"/signin"}><a className='text-blue-600'>Sign In</a></Link></p>
            </div>

            <h2 className='text-7xl pt-10 font-semibold mx-auto'>Hire Choices</h2>
            <h3 className='text-3xl pt-10 italic font-medium mx-auto'>‘Hire Choices for People and Opportunities’</h3>

            <Form className="flex flex-col justify-center items-center  min-w-full " onSubmit={onSubmit}>
                <div className="flex min-w-full justify-evenly">

                    <Input
                        id="keywords"
                        name="keywords"
                        type="keywords"
                        label="Keywords"
                        labelClass="font-bold relative left-32 -top-2 " labelTxt="Keywords"
                        placeholder="Job Title, Industry, Employer"
                        register={register}
                        errors={errors}
                        classes="w-2/6"
                    />
                    <Input
                        id="location"
                        name="location"
                        type="location"
                        label="Location"
                        labelClass="font-bold relative left-32 -top-2 " labelTxt="Location"
                        placeholder="City, State or Zip Code"
                        register={register}
                        errors={errors}
                        classes="w-2/6"
                    />
                </div>
                <Button className="py-3 px-7 m-4 text-white mx-auto font-bold bg-green-500 self-center">Search</Button>
            </Form>

            <div className='mx-auto p-5 text-center'>
                <p className='p-2'>Create / Post Resume</p>
                <p className='p-2'>Post Job Opportunities</p>
                <p className='p-2 py-7'>© 2020    Contact Us    About Us    Help Center    Terms of Service    Privacy</p>
            </div>
        </section >
    )
}

export default HomePage
