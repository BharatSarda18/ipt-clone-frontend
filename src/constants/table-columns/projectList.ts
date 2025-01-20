import React from 'react';

interface Collaborator {
  name: string;
}

interface Project {
  name: string;
  description: string;
  client_name: string;
  owner: string;
  collaborators: Collaborator[];
  created_at: string;
  updated_at: string;
  projectLock: boolean;
  project_id: string;
}

interface ColumnType {
  title: string;
  dataIndex: keyof Project;
  key: string;
//   render?: (value: any, row: Project) => React.ReactNode;
}

export const getProjectListColumns = ()  => {
  return [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        // render: (value: string) => {
        //   return (
        //     <CustomTooltip title={value}>
        //       <div className="project-name">{value}</div>
        //     </CustomTooltip>
        //   );
        // },
      },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Client',
      dataIndex: 'client_name',
      key: 'client_name',
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: 'Assignee',
      dataIndex: 'collaborators',
      key: 'collaborators',
    //   render: (value: Collaborator[]) => {
    //     if (!value || value.length === 0) {
    //       return <div className="custom-na-collabo flex items-center justify-center w-80px">NA</div>;
    //     }

    //     const userNames = value.map((item) => item?.name);
    //     const tooltipTitle = userNames.join(', ');

    //     const [first, ...rest] = value;
    //     return (
    //       <Tooltip title={tooltipTitle} placement="left-end">
    //         <span className="assignee-column">
    //           <span className="assignee-column-first">{first?.name}</span>
    //           <span className="text-[#94A3B8]">
    //             {rest && rest.length ? `+${rest.length}` : ''}
    //           </span>
    //         </span>
    //       </Tooltip>
    //     );
    //   },
    },
    {
      title: 'Created On',
      dataIndex: 'created_at',
      key: 'created_at',
    //   render: (value: string) => {
    //     if (!value) {
    //       return value;
    //     }
    //     return format(new Date(value), 'dd-MMM-yyyy');
    //   },
    },
    {
      title: 'Last Updated',
      dataIndex: 'updated_at',
      key: 'updated_at',
    //   render: (value: string) => {
    //     if (!value) {
    //       return value;
    //     }
    //     return format(new Date(value), 'dd-MMM-yyyy');
    //   },
    },
    {
      title: 'Lock',
      dataIndex: 'projectLock',
      key: 'projectLock',
      //render: (value: boolean, row: Project) => renderSwitch(row.collaborators, row.project_id, row),
    },
    //{
    //   title: 'Actions',
    //   dataIndex: 'action',
    //   key: 'action',
    //   render: (value: any, row: Project) => {
    //     return (
    //       <ProjectActionsMenu
    //         onMenuClick={handleMenuClick}
    //         params={row}
    //         setActiveProjectId={setActiveProjectId}
    //         selectedRow={selectedRow}
    //         activeTab={activeTab}
    //       />
    //     );
    //   },
   // },
  ];
};
