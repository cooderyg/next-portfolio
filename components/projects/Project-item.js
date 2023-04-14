import Image from "next/image";
export default function ProjectItem ({data}) {
   const title = data.properties.Name.title[0].plain_text
   const github = data.properties.Github.url
   const youtube = data.properties.Youtube.url
   const description = data.properties.Description.rich_text[0].plain_text;
   const date = data.properties.WorkPeriod.date
   const imgSrc = data.cover.file?.url || data.cover.external.url 
    return(
   
          
            <div className="flex flex-col mb-8 md:mb-0 bg-slate-300 dark:bg-slate-700  rounded-xl hover:shadow-xl shadow-slate-500 dark:shadow-gray-400 transition hover:translate-y-[-5px]">
                <div className="w-full aspect-[6/5] relative">
                    <Image 
                        className="rounded-t-xl object-cover"
                        src={imgSrc}
                        alt="cover image"
                        fill
                        
                    />
                </div>
                <div className="p-3">
                    <h2 className="mt-2">{title}</h2>
                    <a className="" target="_blank" href={github}>깃헙 바로가기</a>
                    <a target="_blank" href={youtube}>유튜브 바로가기</a>
                    <p>{description}</p>
                    <p>작업기간 : {`${date.start} ~ ${date.end}`}</p>
                </div>
            </div>
       
    )
}