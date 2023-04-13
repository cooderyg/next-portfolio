import Image from "next/image";
export default function ProjectItem ({data}) {
   const title = data.properties.Name.title[0].plain_text
   const github = data.properties.Github.url
   const youtube = data.properties.Youtube.url
   const description = data.properties.Description.rich_text[0].plain_text;
   const date = data.properties.WorkPeriod.date
   const imgSrc = data.cover.file?.url || data.cover.external.url 
   console.log(date)
    return(
   
          
            <div className="flex flex-col m-3 bg-slate-700 rounded-xl">
                <Image 
                    className="rounded-t-xl"
                    src={imgSrc}
                    alt="cover image"
                    width={1500}
                    height={1500}
                />
                <h2>{title}</h2>
                <a target="_blank" href={github}>깃헙 바로가기</a>
                <a target="_blank" href={youtube}>유튜브</a>
                <p>{description}</p>
                <p>작업기간 : {`${date.start} ~ ${date.end}`}</p>
            </div>
       
    )
}