import Hero from '@/components/Home/Hero'
import Layout from '@/components/Layout'
import Head from 'next/head'


export default function Home() {
  return (
  <Layout>
    <Head>
      <title>강영규 포트폴리오</title>
      <meta name="description" content="오늘도 빡코딩!" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <section className= "flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <Hero />
       
      </div>
    </section>

   
  </Layout>
  )
}
