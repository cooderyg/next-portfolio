import Animation from "@/components/404/Animation";
import Layout from "@/components/Home/Layout";

export default function PageNotFound() {
    return(
        <Layout>
            <h2 className="text-center mt-5 font-bold text-xl md:text-3xl lg:text-4xl px-2">페이지를 찾을 수 없습니다 ..ㅜㅜ</h2>
            <div className="min-h-[400px] lg:min-h-screen">
                <Animation />
            </div>
        </Layout>
    )
}