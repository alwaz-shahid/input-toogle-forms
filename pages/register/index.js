import React from 'react'
import Link from "next/link";
import Registration from '../../components/Forms/signup/Registration';


const registerEmployee = () => {
    return (
        <section className='min-h-screen min-w-full p-14'>
            <div className='p-6'>
                <p className=''>
                    <Link href={"/"}><a>Hire Choices</a></Link> | <Link href={"/"}><a>Products & Pricing</a></Link> | <Link href={"/"}><a>Search Resumes</a></Link>
                </p>
                <h3 className=''>
                    Register here to start sourcing candidates quickly and easily.
                </h3>
                <h2 className=''>
                    Already have an account? <Link href={"/signin"}><a>Sign in Here</a></Link>       </h2>
            </div>

            <Registration />
        </section>
    )
}

export default registerEmployee


export async function getStaticProps() {

    return {
        props: {},
        revalidate: 100,
    }
}