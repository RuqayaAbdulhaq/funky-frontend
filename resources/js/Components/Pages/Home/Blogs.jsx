import BlogCard from "@/Components/BlogCard";

export default function Blogs(props){
    return(
        <div className="flex-col align-center flex gap-[20px]">
            <h1>Recent Blogs</h1>
            <div className="flex gap-[20px]">
                <BlogCard date={"14 Jul 2024"} imgSrc={"/images/lantern.jpg"} 
                title={"Japanese Lantern"} 
                description={"Drawn using html canvas"}/>
                <BlogCard date={"14 Jul 2024"} imgSrc={"https://img.freepik.com/free-vector/car-street_18591-51124.jpg?t=st=1720388086~exp=1720391686~hmac=80a4f5d21f308f9a7d2bb472cce9e8187ddec736424bc33d93d766dc1d2b45cb&w=1380"} 
                title={"Animating Car Loader"} 
                description={"Creating a car going on the road animation"}/>
                <BlogCard date={"14 Jul 2024"} imgSrc={"https://img.freepik.com/free-vector/realistic-horror-bloody-text-effect_52683-136698.jpg?t=st=1720388515~exp=1720392115~hmac=b365d7e28f91dc0d3340100e6c5fcaf136c9c92e16d64ea4cf4841b1d2990b2f&w=1380"} 
                title={"Blood Effect"} 
                description={"as a form vaidation"}/>
            </div>
        </div>
    );
}