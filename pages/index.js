import Hero from '@/components/Home/Hero'
import Layout from '@/components/Layout'


export default function Home() {
  return (
  <Layout>
    <section className= "flex min-h-[80vh] flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <Hero />
       
      </div>
    </section>

   
  </Layout>
  )
}
