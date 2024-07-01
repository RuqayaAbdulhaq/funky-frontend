import Navbar from "@/Components/Navbar";

export default function WebsiteLayout(props){
    return(
        <div className="w-full h-full px-[20px] bg-gray-light">
            <Navbar/>
            <main className="flex justify-center">
                {props.children}
            </main>
        </div>
    );
}