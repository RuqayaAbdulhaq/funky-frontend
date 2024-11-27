import WebsiteLayout from "@/Layouts/WebsiteLayout";
import { Hero, Info, Blogs } from "@/Components/Pages/Home";
import Tag from "@/Components/UI/Tag";

export default function Home(props){
    return(
        <WebsiteLayout>
            <div className="flex flex-col gap-[64px] pt-[500px] w-full px-4 sm:px-6 lg:px-8 xl:px-16 max-w-screen-2xl mx-auto">
                <Hero/>
                <Blogs/>
                <div className="relative h-1/4">
                    <div className="flex gap-2">
                        <Tag title="Javascript" icon="javascript.svg"/>
                        <Tag title="Html" icon="html.svg"/>
                        <Tag title="Css" icon="css.svg"/>
                        <Tag title="Typescript" icon="typescript.svg"/>
                        <Tag title="React" icon="react.svg"/>
                    </div>
                    <div className={`bg-radial-fade absolute w-[200px] h-[200px] rounded-full -top-[40px] -right-[100px]`}></div>
                </div>
            </div>
        </WebsiteLayout>
    );
}