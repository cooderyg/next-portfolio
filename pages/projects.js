import Head from "next/head";
import { TOKEN, DATABASE_ID } from "@/config";
import Layout from "@/components/Home/Layout";
import ProjectItem from "@/components/projects/Project-item";
export default function Projects({projects}) {
    return(
        <Layout>
            <section className="grid grid-cols-1 max-w-[1520px] my-10  px-5 mx-auto md:grid-cols-2 md:gap-12 ">
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

    return {
      props: {projects}, 
    }
  }