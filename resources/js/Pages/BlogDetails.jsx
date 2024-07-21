import WebsiteLayout from "@/Layouts/WebsiteLayout";

export default function BlogDetails(props){
    return(
        <WebsiteLayout>
            <div className="flex flex-col gap-[64px]">
                <div className="flex-col md:flex-row flex justify-between md:items-center">
                    <div className="flex flex-col justify-center items-start gap-[20px]">
                        <h1 className="font-bold text-[48px] text-secondary-gray">Blog Title</h1>
                        <p className="font-bold text-[24px] text-gray-400">Blog very long description Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="flex items-center gap-[5px]"> 
                            <div className="w-[30px] h-[30px] rounded-[5px] bg-gray-200"></div>
                            <div className="w-[30px] h-[30px] rounded-[5px] bg-gray-200"></div>
                            <div className="w-[30px] h-[30px] rounded-[5px] bg-gray-200"></div>
                        </div>
                    </div>
                    <div className="bg-gray-200 rounded-[12px] h-[360px] min-w-[300px] max-w-[660px]">

                    </div>
                </div>
                <hr/>
                <p className="text-[18px] text-secondary whitespace-pre-line">
                    {"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nulla aliquam dolor similique dolorum velit odio dolores optio rem soluta sit reprehenderit alias asperiores maxime obcaecati earum consectetur quo magni. \n Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nulla aliquam dolor similique dolorum velit odio dolores optio rem soluta sit reprehenderit alias asperiores maxime obcaecati earum consectetur quo magni. \n Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nulla aliquam dolor similique dolorum velit odio dolores optio rem soluta sit reprehenderit alias asperiores maxime obcaecati earum consectetur quo magni."}
                </p>
            </div>
        </WebsiteLayout>
    );
}