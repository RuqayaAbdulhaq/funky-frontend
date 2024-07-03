import WebsiteLayout from "@/Layouts/WebsiteLayout";
import { Hero, Info, Blogs } from "@/Components/Pages/Home";

export default function Home(props){
    return(
        <WebsiteLayout>
            <div className="flex flex-col gap-[64px]">
                <Hero/>
                <Info/>
                <Blogs/>
            </div>
        </WebsiteLayout>
    );
}