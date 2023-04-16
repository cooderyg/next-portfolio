import Link from "next/link";
import DarkModeToggleButton from "./darkmode-toggle-button";


export default function Header() {
    return(
        <>
            <header className="text-gray-600 body-font  md:sticky top-0 bg-slate-50 dark:bg-slate-900 z-20">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/">
                        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">강영규 포트폴리오</span>
                        </div>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
                        <Link href="/"><div className="hover:text-gray-900">홈</div></Link>
                        <Link href="/about-me"><div className="hover:text-gray-900">소개</div></Link>
                        <Link href="/projects"><div className="hover:text-gray-900">프로젝트</div></Link>
                        <Link href="/contact"><div className="hover:text-gray-900">연락하기</div></Link>
                    </nav>
                    <DarkModeToggleButton />
                </div>
            </header>
        </>
    )
}