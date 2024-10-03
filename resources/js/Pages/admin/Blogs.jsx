import DataTable from "@/Components/UI/DataTable";
import AddBlog from "@/Components/Pages/Blogs/AddBlog";
import Dropdown from "@/Components/Dropdown";

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
        <div className="main-container min-h-screen text-black dark:text-white-dark navbar-sticky">
            <nav class="sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[255px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300"></nav>
            <div className="ps-64 main-content flex min-h-screen flex-col">
                <header className="z-40 shadow-sm">
                    <div class="relative flex w-full items-center bg-white px-5 py-2.5 dark:bg-[#0e1726] min-h-[58px]"></div>
                </header>
                <div className="flex w-full justify-center items-center py-6 px-64">
                    <div className="flex flex-col gap-2 w-full">
                        <AddBlog />
                        <DataTable data={props.blogs?.data} columns={columns} />
                    </div>
                </div>
            </div>
        </div>
    );
}
