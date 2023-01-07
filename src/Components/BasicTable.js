import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Login</TableCell>
            <TableCell align="right">Node ID</TableCell>
            <TableCell align="right">Repo Avatar ID</TableCell>
            <TableCell align="right">Repos URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.repo.map((repo) => (
            <TableRow
              key={repo.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {repo.id}
              </TableCell>
              <TableCell align="right">{repo.login}</TableCell>
              <TableCell align="right">{repo.node_id}</TableCell>
              <TableCell align="right">{repo.avatar_url}</TableCell>
              <TableCell align="right">{repo.repos_url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
