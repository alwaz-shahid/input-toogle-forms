import Head from 'next/head'
import Image from 'next/image'
import SignIn from '../components/Forms/login/SignIn'
import Registration from '../components/Forms/signup/Registration'
import HomePage from '../components/screens/HomePage';


export default function Home() {
  return (
    <section className='px-10 py-4'>
      {/* <Registration /> */}
      {/* <SignIn /> */}
      <HomePage />
    </section>
  )
}


export async function getStaticProps() {

  return {
    props: {},
    revalidate: 100,
  }
}