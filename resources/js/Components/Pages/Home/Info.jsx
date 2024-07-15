const cardsInfoArray = [
    {
        text: "An Idea \n pops \n into \n my head.",
        imgSrc: "/images/idea.svg",
        alt: "idea"
    },
    {
        text: "I find \n a way \n to make \n it happen.",
        imgSrc: "/images/programming.svg",
        alt: "programming",
        className: "md:!flex-row-reverse"
    },
    {
        text: "I share \n everything \n I've learned.",
        imgSrc: "/images/blogging.svg",
        alt: "blogging",
    }
]

const CardElement = (props) => {
    return(
        <div className={`flex flex-col gap-[50px] md:flex-row justify-around align-center ${props.className}`}>
            <p className="flex items-center justify-center md:whitespace-pre-line font-medium text-[24px] md:text-[36px] lg:text-[42px] text-gray-500">
                {props.text}
            </p>
            <img className="w-[350px] h-[350px]" src={props.imgSrc} alt={props.alt}/>
        </div>
    );
}

export default function Info(props){
    return(
        <div className="flex flex-col gap-[50px] md:gap-[150px]">
            {
                cardsInfoArray.map((element, index)=>{
                    return(
                        <CardElement key={index} {...element}/>
                    );
                })
            }
        </div>
    );
}