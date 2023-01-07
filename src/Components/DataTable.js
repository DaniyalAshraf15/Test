import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'forks', headerName: 'forks', width: 300 },
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'full_name', headerName: 'Full Name', width: 300 },
  { field: 'node_id', headerName: 'Node ID', width: 500 },

  
 
];


// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function DataTable(props) {
    
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={props.repo}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
