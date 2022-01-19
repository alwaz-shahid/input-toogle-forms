import React from 'react'
import SignIn from '../../components/Forms/login/SignIn'

const signinPage = () => {
    return (
        <section className='min-h-screen min-w-full p-14'>
            <SignIn />
        </section>
    )
}

export default signinPage


export async function getStaticProps() {

    return {
        props: {},
        revalidate: 100,
    }
}