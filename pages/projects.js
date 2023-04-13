import Head from "next/head";
import { TOKEN, DATABASE_ID } from "@/config";
import Layout from "@/components/Home/Layout";
import ProjectItem from "@/components/projects/Project-item";
export default function Projects({projects}) {
  console.log(projects)
    return(
        <Layout>
             <Head>
                <title>강영규 포트폴리오</title>
                <meta name="description" content="오늘도 빡코딩!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="grid grid-cols-1 max-w-[1520px] px-5 mx-auto md:grid-cols-2 md:gap-8 ">
              {projects.results.map((aProject)=>
                <ProjectItem 
                  key={aProject.id}
                  data={aProject}
                />
              )}
            </section>
        </Layout>
    )
}
  //빌드타임 호출
export async function getStaticProps() {
  
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json',
          Authorization:  `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
          sorts: [
            {
              "property": "Name",
              "direction": "ascending"
            }
          ],
          page_size: 100})
      };
      
     const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
      const projects = await res.json();
      const projectNames = projects.results.map(aProject => aProject.properties.Name.title[0].plain_text)

      // console.log(projectNames)

    return {
      props: {projects}, 
    }
  }