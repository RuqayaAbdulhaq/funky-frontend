import DataTable from "@/Components/UI/DataTable";
import Dropdown from "@/Components/UI/Dropdown";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import AddTag from "@/Components/Pages/Tags/addTag";
import EditTag from "@/Components/Pages/Tags/editTag";
import { router } from '@inertiajs/react';


export default function AdminTags(props) {
    const [displayEditModal, setDisplayEditModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState("");

    const onDelete = (tag) => {
        if (confirm(`Are you sure you want to delete the tag "${tag.name}"?`)) {
            router.delete(route('destroy.tag', tag.id), {
                preserveScroll: true,
                onSuccess: () => {
                    console.log('Tag deleted successfully');
                },
            });
        }
    };

    const actionsList = (props) => {
        const { row } = props;
        return (
            <Dropdown>
                <Dropdown.Trigger>
                    <i className="bi bi-three-dots-vertical cursor-pointer"></i>
                </Dropdown.Trigger>
                <Dropdown.Content>
                    <div onClick={() => {
                        setDisplayEditModal(true);
                        setSelectedRow(row);
                    }}
                        className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                        Edit
                    </div>
                    <div onClick={() => { onDelete(row) }}
                        className="block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                        Delete
                    </div>
                </Dropdown.Content>
            </Dropdown>
        );
    };

    const columns = [
        { header: "ID", accessor: "id" },
        { header: "Name", accessor: "name" },
        { header: "color", accessor: "icon" },
        { header: "", accessor: "", cell: actionsList },
    ];

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tags
                </h2>
            }
        >
            <Head title="Tags" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white p-4 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex flex-col gap-2 w-full">
                            <EditTag tag={selectedRow} show={displayEditModal} onClose={() => { setDisplayEditModal(false) }} />
                            <AddTag />
                            <DataTable
                                data={props.tags?.data}
                                columns={columns}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
