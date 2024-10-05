import DataTable from "@/Components/UI/DataTable";
import AddBlog from "@/Components/Pages/Blogs/AddBlog";
import Dropdown from "@/Components/Dropdown";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const actionsList = (props) => {
    return (
        <Dropdown>
            <Dropdown.Trigger>
                <i className="bi bi-three-dots-vertical cursor-pointer"></i>
            </Dropdown.Trigger>
            <Dropdown.Content>
                <Dropdown.Link href={route("admin.create-blog")}>
                    Build
                </Dropdown.Link>
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

export default function AdminBlogs(props) {
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
