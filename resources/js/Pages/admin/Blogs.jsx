import DataTable from "@/Components/UI/DataTable";
import AddBlog from "@/Components/Pages/Blogs/AddBlog";
import AddThumbnail from "@/Components/Pages/Blogs/AddThumbnail";
import Dropdown from "@/Components/Dropdown";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function AdminBlogs(props) {
    const [show, setShow] = useState(false);

    const actionsList = (props) => {
        const { row } = props;
        return (
            <Dropdown>
                <Dropdown.Trigger>
                    <i className="bi bi-three-dots-vertical cursor-pointer"></i>
                </Dropdown.Trigger>
                <Dropdown.Content>
                    <Dropdown.Link href={route(`admin.create-blog`, row.id)}>
                        Build
                    </Dropdown.Link>
                    <div onClick={() => {
                        setShow(true);
                    }}
                        className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                            Edit Thumbnail
                    </div>
                    <AddThumbnail id={row.id}/>
                </Dropdown.Content>
            </Dropdown>
        );
    };
    
    const columns = [
        { header: "ID", accessor: "id" },
        { header: "Title", accessor: "title" },
        { header: "Description", accessor: "description" },
        { header: "", accessor: "description", cell: actionsList },
    ];

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Blogs
                </h2>
            }
        >
            <Head title="Blogs" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white p-4 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex flex-col gap-2 w-full">
                            <AddBlog />
                            <AddThumbnail setShow={setShow} show={show}/>
                            <DataTable
                                data={props.blogs?.data}
                                columns={columns}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
