
import Animation from "@/components/Contact/Animaition";
import Layout from "@/components/Home/Layout";
import Head from "next/head";

export default function Contact() {
    return(
        <Layout>
            <div className="relative text-lg flex flex-wrap lg:items-center justify-center mx-auto  lg:max-w-[1536px] min-h-[100vh]">
                <div className="px-4 lg:px-8  max-w-768px">
                    <p className="max-w-[768px] text-3xl font-bold mt-16 md:text-4xl text-center lg:text-left break-keep">저에게 하고 싶은 말씀이 있으신가요?<span className="lg:block"> 연락을 주시면 빠른 시간 안에 답변 드리겠습니다!</span></p>
                    <a className="relative z-10 text-[#f9e000] block mt-10 text-center lg:text-left translate-x-[-5px] lg:translate-x-0" href="https://open.kakao.com/o/szizGrff" target="_blank">
                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-4">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                        </svg>
                        <span>KakaoTalk OpenChat</span>
                    </a>
                    <p className="relative z-10 text-center lg:text-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                            <span>cooderyg@gmail.com</span>
                    </p>
                </div>
                <div className="max-w-md md:max-w-lg lg:max-w-xl translate-y-[-54px] lg:translate-y-0">
                    <Animation />
                </div>
            </div>
        </Layout>
    )
 
}