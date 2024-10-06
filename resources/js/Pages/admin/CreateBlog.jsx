import Editor from "@/Components/UI/Editor";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function AdminBlog(props) {
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Blog Editor
                </h2>
            }
        >
            <Head>
                <title>Editor</title>
            </Head>
            <div className="py-12">
                <div className="max-w-7xl mx-auto pb-2">
                    <div className="sm:rounded-lg">
                        <link
                            rel="stylesheet"
                            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/github-dark.min.css"
                        ></link>
                        <Editor {...props} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
