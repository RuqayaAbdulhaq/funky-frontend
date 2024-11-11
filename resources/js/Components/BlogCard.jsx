const size = {
    lg: "h-[450px]",
    md: "h-[300px]"
}

export default function BlogCard(props) {
    return (
        <div
            style={{ backgroundImage: `url(${props.imgSrc})` }}
            className={`${size[props.size || "md"]} shadow bg-white relative rounded-md  bg-center bg-cover bg-no-repeat cursor-pointer`}
        >
            <div className="absolute w-full h-full inset-0 bg-[#44585c] bg-opacity-50"></div>
            <div className="absolute top-0 start-0 p-2 ">
                <span className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-lg text-[13px] font-medium rounded-full text-white py-1 px-2">
                    <span className="w-1.5 h-1.5 inline-block bg-white rounded-full"></span>
                    {props.date}
                </span>
            </div>
            <div className="absolute inset-x-0 top-auto bottom-0 p-2">
                <div className="bg-white/50 backdrop-blur-xl p-4 rounded-md text-shadow-sm">
                    <div className="text-white text-center">
                        <h4 className="text-2xl font-semibold">{props.title}</h4>
                        <p className="text-base font-medium mt-3">
                            {props.description}
                        </p>
                        <a href={props.link} className="underline">
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
