export default function Hero(props){
    return(
        <div className="py-6 px-10 rounded-xl bg-primary flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[48px] md:text-[72px]  font-bold text-white whitespace-pre-line">
                    {"Funky \n Frontend"}
                </h1>
                <p className="text-[0.75rem] lg:text-[1rem] text-neutral-light">Where Frontend Gets Weird and Wonderful</p>
            </div>
            
            <div className="max-h-[300px] max-w-[250px] md:max-h-[450px] md:max-w-[400px]">
                <img src="/images/thoughts.svg"/>
            </div>
            
        </div>
    );
}