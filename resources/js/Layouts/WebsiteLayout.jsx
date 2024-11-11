import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function WebsiteLayout(props){
    return(
        <div className="w-full h-full min-h-screen bg-neutral-warm">
            <Navbar/>
            <main className="flex justify-center">
                {props.children}
            </main>
            <Footer/>
        </div>
    );
}