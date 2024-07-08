export default function BlogCard(props) {
    return (
        <div
            style={{ backgroundImage: `url(${props.imgSrc})` }}
            class={`shadow bg-white relative rounded-md w-[400px] h-[350px] bg-center bg-cover bg-no-repeat cursor-pointer`}
        >
            <div class="absolute w-full h-full inset-0 bg-[#44585c] bg-opacity-20"></div>
            <div class="absolute top-0 start-0 p-2 ">
                <span class="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-lg text-[13px] font-medium rounded-full text-white py-1 px-2">
                    <span class="w-1.5 h-1.5 inline-block bg-white rounded-full"></span>
                    {props.date}
                </span>
            </div>
            <div class="absolute inset-x-0 top-auto bottom-0 p-2">
                <div class="bg-white/50 backdrop-blur-xl p-4 rounded-md">
                    <div class="text-white text-center">
                        <h4 class="text-2xl font-semibold">{props.title}</h4>
                        <p class="text-base font-medium mt-3">
                            {props.description}
                        </p>
                        <a href={props.link} class="underline">
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
