import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'watchers_count', headerName: 'Watchers', width: 150 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'url', headerName: 'URL', width: 550 },
  { field: 'language', headerName: 'Language', width: 300 },
  { field: 'forks_count', headerName: 'Forks', width: 200 },

  
 
];

export default function DataTable(props) {
    
  return (
    <div style={{ height: 630.5, width: '95%' }}>
      <DataGrid
        rows={props.repo}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        sx={{ml:7,mr:3,pl:1}}
      />
    </div>
  );
}
