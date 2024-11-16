export default function Tag(props){

    const { title, icon } = props
    return (
        <div className="p-3 w-[135px]  border rounded-lg hover:border-primary hover:bg-white/50 cursor-pointer hover:text-shadow-sm flex items-center gap-4">
            <img src={`/icons/${icon}`} alt={icon} className="w-[30px] h-[30px]"/>
            <span className="text-sm text-gray-800">{title}</span>
        </div>
    )
}