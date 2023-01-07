import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ShimmerTable } from "react-shimmer-effects";
// import BasicTable from './BasicTable';
import DataTable from './DataTable';
// import EnhancedTable from './EnhancedTable';


const SearchBar = () => {
const [searchInput,setSearchInput] = useState('')
const [repo, setRepo] = useState([])
const [flag, setFlag] = useState(true)
const handleChange = (e)=>{
setSearchInput(e.target.value);
}
const handleClick = async () =>{
    console.log(searchInput)
    try{
        

        const result = await axios.get(`https://api.github.com/search/repositories?q=topic:trending`)
        setRepo(result.data.items);
        setFlag(false)
        
    }
    catch(err){
        console.log(err,'Error')
        setFlag(false)
    }
   console.log(repo,'Check')
}
useEffect(() => {
  handleClick();
},[])

// const result = await axios('https://ghapi.huchen.dev/developers?language=&since=daily')
  return (
    <div>
        <h1> Git Repositeries</h1>
        {/* <input type='text' placeholder='search' value={searchInput} onChange={handleChange} />
        <button onClick={handleClick}>Search</button> */}
       { flag === true ? <ShimmerTable row={10} col={6} /> : 
    //    <BasicTable repo ={repo}/>
       <DataTable repo ={repo} />
       } ;
    </div>
  )
}

export default SearchBar