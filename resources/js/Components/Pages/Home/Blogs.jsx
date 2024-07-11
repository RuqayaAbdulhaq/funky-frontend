import BlogCard from "@/Components/BlogCard";

export default function Blogs(props){
    return(
        <div className="flex-col items-center flex gap-[20px]">
            <h1 className="text-gray-500 font-light text-[28px]">Recent Blogs</h1>
            <div className="flex flex-col lg:flex-row gap-[20px]">
                <BlogCard date={"14 Jul 2024"} imgSrc={"/images/lantern.jpg"} 
                title={"Japanese Lantern"} 
                description={"Drawn using html canvas"}/>
                <BlogCard date={"14 Jul 2024"} imgSrc={"https://cdn.pixabay.com/photo/2024/01/22/00/23/ai-generated-8524230_960_720.jpg"} 
                title={"Animating Car Loader"} 
                description={"Creating a car going on the road animation"}/>
                <BlogCard date={"14 Jul 2024"} imgSrc={"https://th.bing.com/th/id/R.fc9dc254e83c5f3d1fd00aa041014e18?rik=BQJUC%2fMf14J%2b9A&riu=http%3a%2f%2fwww.quotemaster.org%2fimages%2f53%2f5385e584c4499cb8b3bf28c39b321434.jpg&ehk=%2fr1GGg59Py3szrfDUYPU%2fp2TgvJ0XZJxffZ7nRhDnKM%3d&risl=&pid=ImgRaw&r=0"} 
                title={"Blood Effect"} 
                description={"as a form vaidation"}/>
            </div>
        </div>
    );
}