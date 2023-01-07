import { Button, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ShimmerTable } from "react-shimmer-effects";
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import DataTable from './DataTable';

const SearchBar = () => {
    const [loadData, setLoadData] = useState(10)
    const [repo, setRepo] = useState([])
    const [flag, setFlag] = useState(true)
    const handleChange = () => {
        setLoadData(loadData + 10);
    }
    const handleClick = async () => {
        setFlag(true)
        try {
            const result = await axios.get(`https://api.github.com/search/repositories?q=topic:trending&sort=stars&order=desc&page=2&per_page=${loadData}`)
            setRepo(result.data.items);
            console.log(result.data.items)
            setFlag(false)

        }
        catch (err) {
            console.log(err, 'Error')
            setFlag(false)
        }
        console.log(repo, 'Check')
    }
    useEffect(() => {
        handleClick();
    },[loadData])

    return (
        <div>
            <Stack direction="row" spacing={45} sx={{ pt: 2 ,pl:2,pr:2,pb:2}} >
                <Typography variant="h4" component="h3" sx={{ pl:70}}> Git Trending Repositeries</Typography> 
                <Button size="small" onClick={handleChange} variant="contained" endIcon={<SendIcon />}>
                    Click to load more Data
                </Button>
            </Stack>
            {flag === true ? <ShimmerTable  sx={{ml:7,mr:3,pl:1}} row={7} col={4} /> : <DataTable  repo={repo} />};
        </div>
    )
}

export default SearchBar