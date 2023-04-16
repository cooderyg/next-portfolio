import Link from "next/link";
import Animation from "./Animation";
import { useRouter } from "next/router";



export default function Hero() {
    const router = useRouter();
    return(
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col order-3 md:order-1 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 break-keep">안녕하세요 개발자 강영규입니다!
                </h1>
                <p className="mb-8 leading-relaxed">시들어 힘차게 못하다 것이다.보라, 사랑의 있는가? 설레는 무엇이 없으면 동력은 사막이다. 가슴이 속에 커다란 투명하되 청춘의 것이다. 무한한 얼음에 되려니와, 사는가 청춘이 인간이 목숨을 대고, 작고 것이다. 이상이 있는 피부가 거친 살 듣는다. 없으면, 그들에게 싹이 심장은 착목한는 천고에 그리하였는가? 천지는 가는 이상의 끓는다. 오직 일월과 얼마나 하는 청춘에서만 얼마나 생명을 곧 힘있다. 꽃 설산에서 꾸며 있으며, 동산에는 작고 일월과 때에, 평화스러운 아름다우냐?</p>
                <div className="flex justify-center">
                    <Link href="/projects">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg dark:text-white">프로젝트 보러가기</button>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 order-2">
               
                <Animation />
            </div>
        </>
    )
}