import TiptabEditor from "@/Components/UI/TiptabEditor";
import Editor from "@/Components/UI/Editor"

export default function AdminBlog(props){
    return(
    <div className="flex justify-center items-center">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/github-dark.min.css"></link>
        <Editor/>
    </div>)
}