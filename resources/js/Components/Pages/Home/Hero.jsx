import TitleTypingEffect from "./TitleTypingEffect";
import HeroImage from "./HeroImage";

export default function Hero() {
    return (
        <div className="z-[80] py-6 px-10 flex flex-col md:flex-row items-center justify-center gap-20">
            <div className="flex flex-col justify-center min-w-1/2">
                <div className="w-full flex justify-center md:justify-start ">
                    <TitleTypingEffect />
                </div>
                <p className="#B37307 text-xs sm:text-sm lg:text-lg text-accent-dark p-2">
                    Where Frontend Gets Weird and Wonderful
                </p>
            </div>
            <HeroImage/>
        </div>
    );
}
