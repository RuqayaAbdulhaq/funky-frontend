import DataTable from "@/Components/UI/DataTable";
import Dropdown from "@/Components/Dropdown";

const actionsList = (props) => {
  return(
    <Dropdown>
      <Dropdown.Trigger>
        <i className="bi bi-three-dots-vertical"></i>
      </Dropdown.Trigger>
      <Dropdown.Content>
        {/* <Dropdown.Link href={route('admin/create-blog')}>Build</Dropdown.Link> */}
    </Dropdown.Content>
    </Dropdown>
    
  );
}

const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Title', accessor: 'title' },
    { header: 'Description', accessor: 'description' },
    { header: '', accessor: 'description', cell: actionsList }
  ];
  
  const data = [
    { name: 'John Doe', age: 28, email: 'john@example.com' },
    { name: 'Jane Smith', age: 34, email: 'jane@example.com' }
  ];

export default function AdminBlogs(props){

  console.log(props);
    return (
        <div className="flex justify-center items-center">
            <DataTable data={props.blogs?.data} columns={columns}/>
        </div>
    );
}