import TableLayout from "../components/uikit/TableLayout"
import { getProjectListColumns } from "../constants/table-columns/projectList";


const ProjectListPage = () => {

  const columns=getProjectListColumns();

  return (
    <div>
      <h1>Project List Page</h1>
      <TableLayout columns={[]}/>
    </div>
  )
}

export default ProjectListPage