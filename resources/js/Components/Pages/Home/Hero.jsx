export default function Hero(props){
    return(
        <div className="text-shadow-sm hero z-[80] bg-primary py-6 px-10 flex flex-col md:flex-row items-center justify-center gap-80">
            <div className="flex flex-col justify-center">
                <h1 className="text-[48px] md:text-8xl font-bold text-white whitespace-pre-line">
                    {"Funky \n Frontend"}
                </h1>
                <p className="text-[0.75rem] lg:text-[1rem] text-white">Where Frontend Gets Weird and Wonderful</p>
            </div>
            
            <div className="max-h-[300px] max-w-[250px] md:max-h-[450px] md:max-w-[400px]">
                <img src="/images/thoughts.svg"/>
            </div>
            
        </div>
    );
}