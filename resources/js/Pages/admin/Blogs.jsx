import DataTable from "@/Components/UI/DataTable";

const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Age', accessor: 'age' },
    { header: 'Email', accessor: 'email' }
  ];
  
  const data = [
    { name: 'John Doe', age: 28, email: 'john@example.com' },
    { name: 'Jane Smith', age: 34, email: 'jane@example.com' }
  ];

export default function AdminBlogs(props){
    return (
        <div className="flex justify-center items-center">
            <DataTable data={data} columns={columns}/>
        </div>
    );
}