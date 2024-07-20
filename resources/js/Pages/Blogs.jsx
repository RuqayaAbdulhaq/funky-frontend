import WebsiteLayout from "@/Layouts/WebsiteLayout";
import { Hero, BlogsGrid } from "@/Components/Pages/Blogs"

export default function Blogs(props){
    return(
        <WebsiteLayout>
            <div className="flex flex-col gap-[64px]">
                <Hero/>
                <BlogsGrid/>
            </div>
        </WebsiteLayout>
    );
}