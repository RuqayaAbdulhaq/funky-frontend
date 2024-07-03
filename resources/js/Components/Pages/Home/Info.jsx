export default function Info(props){
    return(
        <div className="flex flex-col gap-[50px] md:gap-[150px]">
            <div className="flex justify-between align-center">
                <div className="w-[150px] h-[150px] bg-gray-700 rounded-[24px]"></div>
                <p>Info section very long text</p>
            </div>

            <div className="flex justify-between align-center flex-row-reverse">
                <div className="w-[150px] h-[150px] bg-gray-700 rounded-[24px]"></div>
                <p>Info section very long text</p>
            </div>
        </div>
    );
}