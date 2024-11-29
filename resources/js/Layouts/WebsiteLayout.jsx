import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function WebsiteLayout(props){
    return(
        <div className="w-full h-full min-h-screen bg-neutral-warm">
            <Navbar/>
            <main className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 max-w-screen-2xl mx-auto">
                {props.children}
            </main>
            <Footer/>
        </div>
    );
}