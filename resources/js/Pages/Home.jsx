import WebsiteLayout from "@/Layouts/WebsiteLayout";
import { Hero, Info, Blogs } from "@/Components/Pages/Home";

export default function Home(props){
    return(
        <WebsiteLayout>
            <div className="flex flex-col gap-[64px] w-full px-4 sm:px-6 lg:px-8 xl:px-16 max-w-screen-2xl mx-auto">
                <Hero/>
                <Blogs/>
            </div>
        </WebsiteLayout>
    );
}