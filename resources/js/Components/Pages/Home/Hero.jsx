export default function Hero(props){
    return(
        <div className="py-[50px] absolute top-0 left-0 bg-primary-light w-full flex flex-col items-center justify-center">
            <h1 className="text-[48px] md:text-[72px] lg:text-[120px] font-bold text-secondary-gray whitespace-pre-line">
                {"Funky \n Frontend"}
            </h1>
            <p className="text-[0.75rem] lg:text-[1rem] text-center text-gray-500">By learners for learners</p>
            {/* <div className="w-[0.75rem] h-[0.75rem] rounded-full bg-primary absolute right-0 bottom-0 opacity-75 animate-ping"></div> */}
        </div>
    );
}