export default function Hero(props) {
    return (
        <div className="z-[80] py-6 px-10 flex flex-col md:flex-row items-center justify-center gap-20">
            <div className="flex flex-col justify-center">
                <h1 className="text-5xl md:text-8xl xl:text-9xl font-bold text-accent-dark whitespace-pre-line">
                    {"Funky \n Frontend"}
                </h1>
                <p className="#B37307 text-xs sm:text-sm lg:text-lg text-accent-dark p-2">
                    Where Frontend Gets Weird and Wonderful
                </p>
            </div>

            <div className="hidden lg:block w-full h-auto">
                <img src="/images/development3.png" />
            </div>
        </div>
    );
}
